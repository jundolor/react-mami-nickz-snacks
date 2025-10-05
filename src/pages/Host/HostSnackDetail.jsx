import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet, NavLink } from "react-router-dom";
import { getSnack } from "../../api";

export default function HostSnackDetail() {
  const [currentSnack, setCurrentSnack] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams(); // ✅ Correct param name
  console.log("ID", id);

  useEffect(() => {
    console.log("useEffect triggered with ID:", id);
    if (!id) return; // guard against undefined
    async function loadSnacks() {
      setLoading(true);
      try {
        const data = await getSnack(id);
        setCurrentSnack(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadSnacks();
  }, [id]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>There was an error: {error.message}</h1>;
  if (!currentSnack) return <h1>No snack found</h1>;

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all snacks</span>
      </Link>

      <div className="host-snack-detail-layout-container">
        <div className="host-snack-detail">
          <img src={currentSnack.imageUrl} alt={currentSnack.name} />
          <div className="host-snack-detail-info-text">
            <i className={`snack-type snack-type-${currentSnack.type}`}>
              {currentSnack.type}
            </i>
            <h3>{currentSnack.name}</h3>
            <h4>₱{currentSnack.pricePhP}</h4>
          </div>
        </div>

        <nav className="host-snack-detail-nav">
          <NavLink to="." end style={({ isActive }) => (isActive ? activeStyles : null)}>
            Details
          </NavLink>
          <NavLink to="pricing" style={({ isActive }) => (isActive ? activeStyles : null)}>
            Pricing
          </NavLink>
          <NavLink to="photos" style={({ isActive }) => (isActive ? activeStyles : null)}>
            Photos
          </NavLink>
        </nav>

        <Outlet context={{ currentSnack }} />
      </div>
    </section>
  );
}
