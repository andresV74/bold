import * as React from "react"

export const Logo = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		width={114}
		height={40}
		{...props}
	>
		<defs>
			<path id="prefix__a" d="M.001 0h113.72v39.822H.002z" />
		</defs>
		<g fill="none" fillRule="evenodd">
			<mask id="prefix__b" fill="#fff">
				<use xlinkHref="#prefix__a" />
			</mask>
			<path
				fill="#fff"
				d="M34.318 27.013c.678 7.174 6.733 12.81 14.081 12.81 7.352 0 13.407-5.636 14.085-12.81H34.318zm14.081-15.48c-7.348 0-13.403 5.637-14.081 12.811h28.166c-.678-7.174-6.733-12.811-14.085-12.811zm19.884 28.29h11.472V0H68.283v39.823zm33.968 0h11.472V0H102.25v39.823zM0 39.823h11.472V0H.001v39.823zm14.224-.064V11.597c7.173.678 12.808 6.733 12.808 14.08 0 7.349-5.635 13.403-12.808 14.082zm85.354-28.162v28.162c-7.172-.679-12.808-6.733-12.808-14.08 0-7.35 5.636-13.404 12.808-14.082z"
				mask="url(#prefix__b)"
			/>
		</g>
	</svg>
)
