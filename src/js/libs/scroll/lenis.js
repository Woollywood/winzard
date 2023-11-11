import { gsap, ScrollTrigger } from 'gsap/all.js';
import Lenis from '@studio-freight/lenis';
import '../../../scss/libs/lenis.scss';

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);