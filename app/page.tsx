import Image from "next/image";

const HERO = "https://www.woodworks.ie/wp-content/uploads/HP_0965_MR.jpg";
const SECOND = "https://www.woodworks.ie/wp-content/uploads/HP_0925_MR.jpg";
const THIRD = "https://www.woodworks.ie/wp-content/uploads/HP_0973_MR.jpg";
const DETAIL = "https://www.woodworks.ie/wp-content/uploads/HP_0898_MR.jpg";

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "var(--ground)",
        color: "var(--ink)",
      }}
    >
      {/* ── NAV ── */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.5rem 2.5rem",
          backgroundColor: "var(--ground)",
          position: "sticky",
          top: 0,
          zIndex: 50,
          borderBottom: "1px solid rgba(28,28,26,0.08)",
        }}
      >
        <span
          style={{
            fontFamily: "Rokkitt, serif",
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--ink)",
          }}
        >
          Woodworks Dublin
        </span>
        <a
          href="#contact"
          style={{
            fontFamily: "Instrument Sans, sans-serif",
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--ink)",
            textDecoration: "none",
            borderBottom: "1px solid var(--oak)",
            paddingBottom: "1px",
          }}
        >
          Contact
        </a>
      </nav>

      {/* ── NAME SECTION ── */}
      <section
        style={{
          backgroundColor: "var(--ground)",
          paddingTop: "clamp(3rem, 8vw, 7rem)",
          paddingBottom: "clamp(2rem, 5vw, 4rem)",
          overflow: "hidden",
        }}
      >
        <h1
          style={{
            fontFamily: "Rokkitt, serif",
            fontWeight: 800,
            fontSize: "clamp(4.5rem, 16vw, 15rem)",
            lineHeight: 0.92,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            marginBottom: "clamp(1rem, 2.5vw, 2rem)",
            textAlign: "center",
            padding: 0,
          }}
        >
          WOODWORKS
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.35rem",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 2.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "Instrument Sans, sans-serif",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--muted)",
              margin: 0,
            }}
          >
            Bespoke furniture · Made in Dublin · Since the 1970s
          </p>
        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(340px, 60vh, 720px)",
          overflow: "hidden",
        }}
      >
        <Image
          src={HERO}
          alt="Bespoke sage kitchen with warm oak shelving made by Woodworks Dublin"
          fill
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          priority
          sizes="100vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.12)",
          }}
        />
      </section>

      {/* ── CREDENTIAL BAR ── */}
      <section
        style={{
          backgroundColor: "var(--ink-mid, #2a2a28)",
          padding: "1.25rem 2.5rem",
          overflowX: "auto",
        }}
      >
        <p
          style={{
            fontFamily: "Instrument Sans, sans-serif",
            fontSize: "0.6rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(248,248,246,0.65)",
            margin: 0,
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
        >
          50+ Years&nbsp;&nbsp;·&nbsp;&nbsp;Bespoke to Order&nbsp;&nbsp;·&nbsp;&nbsp;Architects &amp; Designers&nbsp;&nbsp;·&nbsp;&nbsp;Glasnevin Showroom&nbsp;&nbsp;·&nbsp;&nbsp;Ballycoolin Workshop&nbsp;&nbsp;·&nbsp;&nbsp;Handmade in Dublin
        </p>
      </section>

      {/* ── HERITAGE SECTION ── */}
      <section
        style={{
          backgroundColor: "var(--ground)",
          padding: "clamp(4rem, 8vw, 8rem) 2.5rem",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
          gap: "clamp(2.5rem, 6vw, 6rem)",
          alignItems: "start",
        }}
      >
        <blockquote
          style={{
            borderLeft: "3px solid var(--oak)",
            paddingLeft: "1.75rem",
            margin: 0,
          }}
        >
          <p
            style={{
              fontFamily: "Rokkitt, serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "clamp(1.35rem, 2.8vw, 2rem)",
              lineHeight: 1.3,
              color: "var(--ink)",
              margin: 0,
            }}
          >
            &ldquo;Every piece is made to measure. No standard sizes. No
            off-the-shelf parts. Each item is designed and built for the
            specific room, the specific client.&rdquo;
          </p>
        </blockquote>

        <div>
          <p
            style={{
              fontFamily: "Instrument Sans, sans-serif",
              fontSize: "1rem",
              fontWeight: 400,
              lineHeight: 1.75,
              color: "var(--ink)",
              margin: "0 0 1.25rem",
            }}
          >
            Woodworks has been making bespoke furniture in Dublin since the
            1970s — a family business with a workshop in Ballycoolin and a
            showroom in Glasnevin. Every kitchen, bedroom and living room piece
            is hand-built to the client&rsquo;s exact specification.
          </p>
          <p
            style={{
              fontFamily: "Instrument Sans, sans-serif",
              fontSize: "1rem",
              fontWeight: 400,
              lineHeight: 1.75,
              color: "var(--ink)",
              margin: 0,
            }}
          >
            Architects and interior designers across Dublin choose Woodworks for
            projects where the brief demands something that simply cannot be
            sourced from a catalogue — furniture built around a space, not
            fitted into it.
          </p>
        </div>
      </section>

      {/* ── SECOND FULL-BLEED IMAGE ── */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(320px, 52vh, 620px)",
          overflow: "hidden",
        }}
      >
        <Image
          src={SECOND}
          alt="Bespoke kitchen with open oak shelving and modern sage cabinetry"
          fill
          style={{ objectFit: "cover", objectPosition: "center 35%" }}
          sizes="100vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(28,28,26,0.55) 0%, transparent 45%)",
          }}
        />
        <p
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "2.5rem",
            fontFamily: "Rokkitt, serif",
            fontStyle: "italic",
            fontSize: "clamp(1rem, 2vw, 1.4rem)",
            fontWeight: 400,
            color: "rgba(248,248,246,0.92)",
            margin: 0,
            maxWidth: "520px",
          }}
        >
          Every kitchen begins with a conversation.
        </p>
      </section>

      {/* ── STATS CENTREPIECE ── */}
      <section
        style={{
          backgroundColor: "#2a2a28",
          padding: "clamp(4rem, 8vw, 7rem) 2.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Rokkitt, serif",
            fontWeight: 800,
            fontSize: "clamp(5rem, 18vw, 16rem)",
            lineHeight: 0.9,
            color: "var(--oak)",
            margin: "0 0 clamp(2rem, 4vw, 3.5rem)",
          }}
        >
          50+
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(2rem, 6vw, 6rem)",
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "1970s", label: "Since" },
            { num: "Bespoke", label: "Every piece" },
            { num: "Dublin", label: "Made in" },
          ].map(({ num, label }) => (
            <div key={num} style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "Rokkitt, serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                  color: "rgba(248,248,246,0.9)",
                  margin: "0 0 0.25rem",
                }}
              >
                {num}
              </p>
              <p
                style={{
                  fontFamily: "Instrument Sans, sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(248,248,246,0.45)",
                  margin: 0,
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section
        style={{
          backgroundColor: "var(--cream)",
          padding: "clamp(4rem, 8vw, 8rem) 2.5rem",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "Instrument Sans, sans-serif",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--muted)",
              margin: "0 0 clamp(2rem, 4vw, 3.5rem)",
            }}
          >
            What we make
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
              gap: "1px",
              backgroundColor: "var(--oak)",
            }}
          >
            {[
              {
                title: "Kitchens",
                desc: "Fully bespoke kitchen cabinetry, islands and storage — designed around the room.",
              },
              {
                title: "Bedrooms",
                desc: "Fitted wardrobes, beds and bedroom storage built to measure.",
              },
              {
                title: "Living Rooms",
                desc: "Shelving, media units, alcove cabinetry and bespoke joinery for living spaces.",
              },
              {
                title: "Home Office",
                desc: "Built-in desks, bookshelves and office storage that work as hard as you do.",
              },
              {
                title: "Bespoke Units",
                desc: "One-of-a-kind pieces — utility rooms, pantries, bar units, dressing rooms.",
              },
              {
                title: "Trade Projects",
                desc: "Working with architects and interior designers on residential and contract projects.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                style={{
                  backgroundColor: "var(--cream)",
                  padding: "2.5rem 2rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Rokkitt, serif",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    color: "var(--ink)",
                    margin: "0 0 0.75rem",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: "Instrument Sans, sans-serif",
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                    color: "var(--muted)",
                    margin: 0,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THIRD IMAGE + DETAIL ── */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          minHeight: "clamp(320px, 45vh, 560px)",
        }}
      >
        <div style={{ position: "relative", minHeight: "clamp(280px, 45vh, 560px)" }}>
          <Image
            src={THIRD}
            alt="Bespoke kitchen with island looking out to garden"
            fill
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
            sizes="(min-width: 840px) 50vw, 100vw"
          />
        </div>
        <div
          style={{
            position: "relative",
            minHeight: "clamp(280px, 45vh, 560px)",
            overflow: "hidden",
          }}
        >
          <Image
            src={DETAIL}
            alt="Oak open shelving detail in a Woodworks Dublin kitchen"
            fill
            style={{ objectFit: "cover", objectPosition: "center 25%" }}
            sizes="(min-width: 840px) 50vw, 100vw"
          />
        </div>
      </section>

      {/* ── ABOUT THE PROCESS ── */}
      <section
        style={{
          backgroundColor: "var(--ground)",
          padding: "clamp(4rem, 8vw, 8rem) 2.5rem",
          maxWidth: "840px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "Rokkitt, serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            color: "var(--ink)",
            margin: "0 0 1.5rem",
          }}
        >
          Handcrafted in Dublin
        </h2>
        <p
          style={{
            fontFamily: "Instrument Sans, sans-serif",
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: "var(--ink)",
            margin: "0 0 1.25rem",
          }}
        >
          The Woodworks workshop is in Ballycoolin, Dublin 15. The showroom is
          in Glasnevin, Dublin 9. Every project starts with a visit — to see
          the space, understand the brief, and work out what the room actually
          needs.
        </p>
        <p
          style={{
            fontFamily: "Instrument Sans, sans-serif",
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: "var(--muted)",
            margin: 0,
          }}
        >
          No flat-pack. No compromise. Just furniture built for the specific
          home, by the same family that has been making it for over fifty years.
        </p>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        style={{
          backgroundColor: "#2a2a28",
          padding: "clamp(4rem, 8vw, 8rem) 2.5rem",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Rokkitt, serif",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
              color: "rgba(248,248,246,0.95)",
              margin: "0 0 clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            Visit the showroom.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 220px), 1fr))",
              gap: "2.5rem",
              marginBottom: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            {[
              {
                label: "Showroom",
                lines: ["The Rise", "Glasnevin, Dublin 9"],
              },
              {
                label: "Workshop",
                lines: ["Northwest Business Park", "Ballycoolin, Dublin 15"],
              },
              {
                label: "Phone",
                lines: ["(01) 837 7022"],
              },
              {
                label: "Email",
                lines: ["wow@woodworks.ie"],
              },
            ].map(({ label, lines }) => (
              <div key={label}>
                <p
                  style={{
                    fontFamily: "Instrument Sans, sans-serif",
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--oak)",
                    margin: "0 0 0.5rem",
                  }}
                >
                  {label}
                </p>
                {lines.map((line) => (
                  <p
                    key={line}
                    style={{
                      fontFamily: "Instrument Sans, sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: 400,
                      color: "rgba(248,248,246,0.8)",
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <a
            href="mailto:wow@woodworks.ie"
            style={{
              display: "inline-block",
              fontFamily: "Instrument Sans, sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(248,248,246,0.95)",
              textDecoration: "none",
              border: "1px solid var(--oak)",
              padding: "1rem 2.5rem",
              transition: "background 0.2s",
            }}
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          backgroundColor: "#1c1c1a",
          padding: "2.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.25rem",
        }}
      >
        {/* maker's mark stamp */}
        <div
          style={{
            border: "1px solid rgba(196, 122, 58, 0.45)",
            padding: "0.75rem 1.75rem",
            display: "inline-block",
          }}
        >
          <p
            style={{
              fontFamily: "Instrument Sans, sans-serif",
              fontSize: "0.55rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--oak)",
              margin: 0,
              textAlign: "center",
            }}
          >
            Designed · Made · Dublin · Since the 1970s
          </p>
        </div>
        <p
          style={{
            fontFamily: "Instrument Sans, sans-serif",
            fontSize: "0.65rem",
            fontWeight: 400,
            letterSpacing: "0.1em",
            color: "rgba(248,248,246,0.3)",
            margin: 0,
            textAlign: "center",
          }}
        >
          Woodworks Dublin &nbsp;·&nbsp; The Rise, Glasnevin &nbsp;·&nbsp; (01) 837 7022
        </p>
      </footer>
    </main>
  );
}
