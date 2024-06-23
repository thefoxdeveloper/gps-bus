"use client";
import Link from "next/link";
import {
	Bell,
	CircleUser,
	Home,
	LineChart,
	Menu,
	Package,
	Package2,
	Search,
	ShoppingCart,
	Users,
	Bus,
	Star,
} from "lucide-react";
import { TbBusStop } from "react-icons/tb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MapComponent } from "@/components/map";
import { MapProvider } from "@/providers/map-provider";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";
import { useContext } from "react";
import { BusContext } from "@/context/BusContext";
import { busList } from "@/data/data";
import FavBtn from "@/components/favbtn/favBtn";

export function Dashboard() {
	const context = useContext(BusContext);
	if (!context) {
		throw new Error("error no context");
	}

	const { busPosition, setBusPosition } = context;
	const updateBusPosition = (newPosition: { lat: number; lng: number }) => {
		setBusPosition(newPosition);
	};
	return (
		<div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
			<div className="hidden border-r bg-muted/40 md:block">
				<div className="flex h-full max-h-screen flex-col gap-2">
					<div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
						<Link href="/" className="flex items-center gap-2 font-semibold">
							<TbBusStop className="h-6 w-6" />
							<span className="">GPS Bus</span>
						</Link>
						<Button variant="outline" size="icon" className="ml-auto h-8 w-8">
							<Bell className="h-4 w-4" />
							<span className="sr-only">Ativar Notificações</span>
						</Button>
					</div>
					<div className="flex-1">
						<nav className="grid items-start px-2 text-sm font-medium lg:px-4">
							<span className="text-lg font-semibold text-muted-foreground">
								Favoritos
							</span>
							<Separator className="my-2" />
							{busList.map((bus) => (
								<Toggle
									key={bus.id}
									className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
									onClick={() =>
										updateBusPosition({
											lat: bus.position.lat,
											lng: bus.position.lng,
										})
									}
								>
									<Bus className="h-4 w-4" />
									{bus.linha}

									<FavBtn id={bus.id} />
								</Toggle>
							))}

							<span className="text-lg font-semibold text-muted-foreground">
								Próximos
							</span>
							<Separator className="my-2" />
							{busList.map(
								(bus) =>
									bus.itsNear && (
										<Toggle
											key={bus.id}
											className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
											onClick={() =>
												updateBusPosition({
													lat: bus.position.lat,
													lng: bus.position.lng,
												})
											}
										>
											<Bus className="h-4 w-4" />
											{bus.linha}

											<FavBtn id={bus.id} />
										</Toggle>
									),
							)}
						</nav>
					</div>
				</div>
			</div>
			<div className="flex flex-col">
				<header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant="outline"
								size="icon"
								className="shrink-0 md:hidden"
							>
								<Menu className="h-5 w-5" />
							</Button>
						</SheetTrigger>
						<SheetContent side="left" className="flex flex-col">
							<div className="flex h-14 items-center border-b  lg:h-[60px] lg:px-6">
								<Link
									href="/"
									className="flex items-center gap-2 font-semibold"
								>
									<TbBusStop className="h-6 w-6" />
									<span className="">GPS Bus</span>
								</Link>
							</div>
							<nav className="grid items-start text-sm font-medium lg:px-4">
								<span className="text-lg font-semibold text-muted-foreground">
									Favoritos
								</span>
								<Separator className="my-2" />
								{busList.map((bus) => (
									<Toggle
										key={bus.id}
										className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
										onClick={() =>
											updateBusPosition({
												lat: bus.position.lat,
												lng: bus.position.lng,
											})
										}
									>
										<Bus className="h-4 w-4" />
										{bus.linha}

										<FavBtn id={bus.id} />
									</Toggle>
								))}

								<span className="text-lg font-semibold text-muted-foreground">
									Próximos
								</span>
								<Separator className="my-2" />
								{busList.map(
									(bus) =>
										bus.itsNear && (
											<Toggle
												key={bus.id}
												className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
												onClick={() =>
													updateBusPosition({
														lat: bus.position.lat,
														lng: bus.position.lng,
													})
												}
											>
												<Bus className="h-4 w-4" />
												{bus.linha}

												<FavBtn id={bus.id} />
											</Toggle>
										),
								)}
							</nav>
						</SheetContent>
					</Sheet>
					<div className="w-full flex-1">
						<form>
							<div className="relative">
								<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
								<Input
									type="search"
									placeholder="Procurar Ônibus..."
									className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
								/>
							</div>
						</form>
					</div>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="secondary" size="icon" className="rounded-full">
								<CircleUser className="h-5 w-5" />
								<span className="sr-only">Abrir menu de configurações</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuLabel>Minha conta</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Configurações</DropdownMenuItem>
							<DropdownMenuItem>Ajuda</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Logout</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</header>
				<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
					<div className="flex items-center">
						<h1 className="text-lg font-semibold md:text-2xl">Mapa</h1>
					</div>
					<div className="flex flex-1 items-center  justify-center rounded-lg shadow-sm">
						<MapProvider>
							<MapComponent lat={busPosition.lat} lng={busPosition.lng} />
						</MapProvider>
					</div>
				</main>
			</div>
		</div>
	);
}
