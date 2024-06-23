import "./styles.css";

export default function FavBtn({ id }: { id: number }) {
	function bookmark() {
		console.log("bookmark", id);
	}

	return (
		<label className="ui-bookmark ml-auto">
			<input type="checkbox" />
			<div className="bookmark">
				{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
				<svg
					viewBox="0 0 16 16"
					className="bi bi-heart-fill mt-1"
					height="15"
					width="15"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
						fill-rule="evenodd"
					/>
				</svg>
			</div>
		</label>
	);
}
