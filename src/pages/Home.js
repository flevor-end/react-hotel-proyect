import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRoom from "../components/FeaturedRoom";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Habitaciones de Lujo"
          subtitle="habitaciones de lujo desde $ 299"
        >
          <Link to="/hoteles" className="btn-primary">
            Nuestros Hoteles
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRoom />
    </>
  );
}
