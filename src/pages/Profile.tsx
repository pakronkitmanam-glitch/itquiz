import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";

function Profile() {
  const navigate = useNavigate();

  // =========================
  // IMAGE SLIDER
  // =========================

  const images = [
    "/ciel1.png",
    "/ciel2.png",
    "/ciel3.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // เปลี่ยนรูปอัตโนมัติทุก 5 วินาที
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => {
        return (prev + 1) % images.length;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // รูปถัดไป
  const nextImage = () => {
    setCurrentImage((prev) => {
      return (prev + 1) % images.length;
    });
  };

  // รูปก่อนหน้า
  const previousImage = () => {
    setCurrentImage((prev) => {
      return (prev - 1 + images.length) % images.length;
    });
  };

  // เลือกรูปจากจุดด้านล่าง
  const selectImage = (index: number) => {
    setCurrentImage(index);
  };

  // =========================
  // LOGOUT
  // =========================

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="ciel-page">

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="ciel-navbar">

        <div className="brand">
          TYPE-MOON <span>ARCHIVE</span>
        </div>

        <div className="nav-right">

          <span className="status">
            SERVANT DATABASE
          </span>

          <button onClick={handleLogout}>
            LOGOUT
          </button>

        </div>

      </nav>


      {/* =========================
          HERO
      ========================= */}

      <main>

        <section className="ciel-hero">

          {/* IMAGE SLIDER */}

          <div className="hero-image">

            <div className="image-frame">

              <img
                src={images[currentImage]}
                alt={`Ciel ${currentImage + 1}`}
                className="ciel-slide-image"
              />

              {/* ปุ่มก่อนหน้า */}

              <button
                className="slider-button slider-prev"
                onClick={previousImage}
                aria-label="Previous image"
              >
                ‹
              </button>


              {/* ปุ่มถัดไป */}

              <button
                className="slider-button slider-next"
                onClick={nextImage}
                aria-label="Next image"
              >
                ›
              </button>


              {/* จุดเลือกรูป */}

              <div className="slider-dots">

                {images.map((_, index) => (

                  <button
                    key={index}
                    className={`slider-dot ${
                      currentImage === index
                        ? "active"
                        : ""
                    }`}
                    onClick={() => selectImage(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />

                ))}

              </div>

            </div>


            {/* STAGE */}

            <div className="stage">
              STAGE 0{currentImage + 1}
            </div>

          </div>


          {/* CHARACTER INFORMATION */}

          <div className="hero-content">

            <div className="classification">
              SERVANT PROFILE / #418
            </div>

            <h1>
              C.I.E.L
            </h1>

            <h2>
              シエル
            </h2>


            {/* CLASS */}

            <div className="class-badge">

              <span>
                ★ ★ ★ ★ ★
              </span>

              <strong>
                MOONCANCER
              </strong>

            </div>


            {/* DESCRIPTION */}

            <p className="hero-description">

              A mysterious Executor and vampire hunter
              summoned as a MoonCancer-class Servant.

            </p>


            {/* TAGS */}

            <div className="hero-tags">

              <span>
                FATE/GRAND ORDER
              </span>

              <span>
                LIVING SERVANT
              </span>

              <span>
                LAWFUL GOOD
              </span>

            </div>

          </div>

        </section>


        {/* =========================
            BASIC INFORMATION
        ========================= */}

        <section className="section">

          <div className="section-heading">

            <span>
              01
            </span>

            <div>

              <small>
                PERSONAL INFORMATION
              </small>

              <h2>
                Basic Information
              </h2>

            </div>

          </div>


          <div className="info-grid">

            <Info
              label="True Name"
              value="Ciel"
            />

            <Info
              label="Class"
              value="MoonCancer"
            />

            <Info
              label="Height"
              value="162 cm"
            />

            <Info
              label="Weight"
              value="52 kg"
            />

            <Info
              label="Gender"
              value="Female"
            />

            <Info
              label="Alignment"
              value="Lawful Good"
            />

            <Info
              label="Attribute"
              value="Human"
            />

            <Info
              label="Region"
              value="France / Others"
            />

            <Info
              label="Type"
              value="Living Servant"
            />

          </div>

        </section>


        {/* =========================
            PARAMETERS
        ========================= */}

        <section className="section">

          <div className="section-heading">

            <span>
              02
            </span>

            <div>

              <small>
                SAINT GRAPH
              </small>

              <h2>
                Parameters
              </h2>

            </div>

          </div>


          <div className="parameters">

            <Parameter
              name="STR"
              rank="C+"
              percent={65}
            />

            <Parameter
              name="END"
              rank="EX"
              percent={100}
            />

            <Parameter
              name="AGI"
              rank="B+"
              percent={82}
            />

            <Parameter
              name="MANA"
              rank="A+"
              percent={95}
            />

            <Parameter
              name="LUCK"
              rank="C+"
              percent={65}
            />

            <Parameter
              name="NP"
              rank="A+"
              percent={95}
            />

          </div>

        </section>


        {/* =========================
            CLASS SKILLS
        ========================= */}

        <section className="section">

          <div className="section-heading">

            <span>
              03
            </span>

            <div>

              <small>
                CLASS ABILITIES
              </small>

              <h2>
                Class Skills
              </h2>

            </div>

          </div>


          <div className="skill-grid">

            <Skill
              name="Magic Resistance"
              rank="A"
              description="Resistance against magical interference."
            />

            <Skill
              name="Independent Action"
              rank="EX"
              description="Allows combat without relying heavily on her Master."
            />

            <Skill
              name="Automatic Regeneration"
              rank="A"
              description="Damaged parts of her body can regenerate automatically."
            />

            <Skill
              name="Executor (Bow)"
              rank="A"
              description="An Executor ability associated with her combat style."
            />

          </div>

        </section>


        {/* =========================
            PERSONAL SKILLS
        ========================= */}

        <section className="section">

          <div className="section-heading">

            <span>
              04
            </span>

            <div>

              <small>
                PERSONAL ABILITIES
              </small>

              <h2>
                Personal Skills
              </h2>

            </div>

          </div>


          <div className="skill-grid">

            <Skill
              name="Human Mana Factory"
              rank="A"
              description="An ability representing Ciel's extraordinary generation of magical energy."
            />

            <Skill
              name="Phase Slip Swordsmanship"
              rank="B+"
              description="A unique swordsmanship technique possessed by Ciel."
            />

            <Skill
              name="Idea Blood"
              rank="B"
              description="A special ability connected to Ciel's unique nature."
            />

          </div>

        </section>


        {/* =========================
            NOBLE PHANTASM
        ========================= */}

        <section className="section np-section">

          <div className="section-heading">

            <span>
              05
            </span>

            <div>

              <small>
                ULTIMATE ARMAMENT
              </small>

              <h2>
                Noble Phantasm
              </h2>

            </div>

          </div>


          {/* NP 1 */}

          <div className="np-card">

            <div className="np-number">
              NP
            </div>

            <div>

              <div className="np-rank">
                ANTI-UNIT / A+
              </div>

              <h3>
                CODE: ORIGINAL SIN
              </h3>

              <p>
                One of Ciel's Noble Phantasms.
              </p>

            </div>

          </div>


          {/* NP 2 */}

          <div className="np-card">

            <div className="np-number">
              NP
            </div>

            <div>

              <div className="np-rank">
                ANTI-UNIT / ANTI-PLANET / A+
              </div>

              <h3>
                CALVARIA GALGALIM
              </h3>

              <p>
                A powerful Noble Phantasm associated
                with Ciel's extraordinary combat capabilities.
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            PROFILE
        ========================= */}

        <section className="section profile-story">

          <div className="section-heading">

            <span>
              06
            </span>

            <div>

              <small>
                CHARACTER RECORD
              </small>

              <h2>
                Profile
              </h2>

            </div>

          </div>


          <div className="story-box">

            <p>
              Ciel is a MoonCancer-class Servant summoned
              by Ritsuka Fujimaru in Fate/Grand Order.
            </p>

            <p>
              She is portrayed as a mysterious Executor
              and vampire hunter whose origins are connected
              to both Tsukihime and Fate/Grand Order.
            </p>

            <p>
              Her Servant identity is deliberately presented
              with an ambiguous connection to the Servant Universe
              and her original incarnation.
            </p>

          </div>

        </section>

      </main>


      {/* =========================
          FOOTER
      ========================= */}

      <footer className="ciel-footer">

        <div>
          TYPE-MOON ARCHIVE
        </div>

        <span>
          CHARACTER DATABASE / C.I.E.L
        </span>

      </footer>

    </div>
  );
}


/* =====================================================
   INFORMATION COMPONENT
===================================================== */

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {

  return (

    <div className="info-card">

      <span>
        {label}
      </span>

      <strong>
        {value}
      </strong>

    </div>

  );
}


/* =====================================================
   PARAMETER COMPONENT
===================================================== */

function Parameter({
  name,
  rank,
  percent,
}: {
  name: string;
  rank: string;
  percent: number;
}) {

  return (

    <div className="parameter">

      <div className="parameter-top">

        <span>
          {name}
        </span>

        <strong>
          {rank}
        </strong>

      </div>


      <div className="parameter-bar">

        <div
          style={{
            width: `${percent}%`,
          }}
        />

      </div>

    </div>

  );
}


/* =====================================================
   SKILL COMPONENT
===================================================== */

function Skill({
  name,
  rank,
  description,
}: {
  name: string;
  rank: string;
  description: string;
}) {

  return (

    <div className="skill-card">

      <div className="skill-top">

        <h3>
          {name}
        </h3>

        <span>
          {rank}
        </span>

      </div>


      <p>
        {description}
      </p>

    </div>

  );

}


export default Profile;