import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import pic from "../assets/lofi2.jpg";
import AboutUs from "./AboutUs";
import HomePage from "./HomePage";
import { useNavigate } from "react-router";
import Content from "../components/Content";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";

const LandingPage = () => {
	return (
		<div>
			<NavBar className='sm:hidden' />

			<div className='hero  flex justify-between lg:flex-col xl:flex-row sm:flex-col '>
				<div className='text-white p-2 mt-5 sm:text-xl'>
					<h1 className='text-7xl'>
						Ditch Distractions,
						<br /> Do More
					</h1>
					<h2 className='text-2xl m-0 p-0 mb-4'>
						Off-Grid Productivity with Pomodoro & To-Dos
					</h2>
					<Link
						to='/homepage'
						className='bg-black text-white text-2xl px-5 py-2  rounded-lg text-sans font-semibold border-2 hover:bg-slate-800 '
					>
						try it
					</Link>
				</div>
				<div className='     -order-first 2xl:hidden'>
					<img
						src={pic}
						alt=''
						className='max-w-[600px] max-h-[500px] mr-2'
					/>
				</div>
			</div>
			<div className='about p-10 text-white '>
				<Content />
			</div>

			<Footer />
		</div>
	);
};

export default LandingPage;
