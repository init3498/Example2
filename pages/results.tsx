import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "../helpers/isomorphicEffect";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutDesktop() {
  const main = useRef();

useIsomorphicLayoutEffect(() => {
		const sections: HTMLElement[] = gsap.utils.toArray(".item");
		const container: HTMLElement = document.querySelector(".about")!;
		const images = sections.map((s) => s.querySelector("img")).filter(Boolean);

		let ctx = gsap.context(() => {
			let totalWidth = 0;

			const calculateTotalWidth = () => {
				const listContainer = document.querySelector(".container");
				sections.map((s) => {
					totalWidth += s.clientWidth;
				});

				if (listContainer !== null) {
					totalWidth -= listContainer.clientWidth;
					ScrollTrigger.refresh();
				}

				gsap.to(sections, {
					x: -totalWidth,
					ease: "none",
					scrollTrigger: {
						pin: true,
						trigger: container,
						scrub: 1,
						end: () => "+=" + `${container.offsetWidth}`,
					},
				});
			};

			let imagesLoaded = 0;
			const checkImagesLoaded = () => {
				imagesLoaded++;
				if (imagesLoaded === images.length) {
					calculateTotalWidth();
				}
			};

			images.forEach((image) => {
				if (image) {
					if (image.complete) {
						checkImagesLoaded();
					} else {
						image.onload = checkImagesLoaded;
					}
				}
			});
		}, main);

		return () => {
			images.forEach((image) => {
				if (image) {
					image.onload = null;
				}
			});
			ctx.revert();
		};
	}, []);

	return (
		<div ref={main}>
		<div className="about">
			<div className="container">
				<div className="item">
					<div className="image">
						<img
							className="img"
							src={"../img/jpeg/green.jpeg"}
						/>
					</div>
					<div className="content">
						<div className="title">
							<h1>{'RESULTS'}</h1>
						</div>
					</div>
				</div>
				<div className="item">
					<div className="image">
						<img
							className="img"
							src={"../img/jpeg/green.jpeg"}
						/>
					</div>
					<div className="content">
						<div className="title">
							<h1>{'RESULTS'}</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
	);
}
