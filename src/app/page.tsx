"use client";

import { useState } from 'react';
import styles from './page.module.css';

function Button() {
  return (
    <button className={styles.cta} type="button">
      Click me
    </button>
  );
}

const projects = [
  {
    id: 1,
    icon: '🧮',
    title: 'Calculator',
    tag: 'Fast, precise calculations',
    details:
      'A focused tool for quick arithmetic, unit conversions, and small formulas. Will prioritize clarity, keyboard support, and a minimal footprint.',
  },
  {
    id: 2,
    icon: '📅',
    title: 'Calendar',
    tag: 'Schedule & reminders',
    details:
      'A clean calendar to schedule events, set reminders, and visualize your week. Emphasis on ease-of-use and quick creation flows.',
  },
  {
    id: 3,
    icon: '🌐',
    title: 'World Clock',
    tag: 'Time across timezones',
    details:
      'Shows multiple clocks for different cities, with quick timezone conversion and daylight savings awareness. Useful for coordinating across locations.',
  },
];

const team = [
  { id: 1, name: 'Jabez', role: 'Product & Dev', bio: 'Coding and gaming enthusiast.', img: '/JABEZ.jpg' },
  { id: 2, name: 'Jake', role: 'Design Lead', bio: 'Makes everything look pretty.', img: '/JAKE.png' },
  { id: 3, name: 'Marco', role: 'Engineer', bio: 'Loves to build cool stuff.', img: '/MARCO.jpg' },
];

export default function Home() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Our Upcoming Projects</h1>
        <p className={styles.subtitle}>Short previews of what we plan to build next. Click a card to read a quick note.</p>
      </section>

      <section className={styles.projectsSection}>
        <h2 style={{ textAlign: 'center', color: '#0b1220' }}>Projects</h2>
        <div className={styles.projectGrid}>
          {projects.map((p) => {
            const isOpen = openId === p.id;
            return (
              <div key={p.id} className={styles.projectCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div className={styles.projectIcon} aria-hidden>
                    {p.icon}
                  </div>
                  <div>
                    <h3 className={styles.projectTitle}>{p.title}</h3>
                    <p className={styles.projectTag}>{p.tag}</p>
                  </div>
                </div>

                <div className={`${styles.projectDetails} ${isOpen ? 'open' : ''}`}>
                  <p style={{ margin: 0 }}>{p.details}</p>
                </div>

                <button
                  className={styles.toggleBtn}
                  onClick={() => setOpenId(isOpen ? null : p.id)}
                  aria-expanded={isOpen}
                >
                  {isOpen ? 'Hide' : 'Read more'}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.teamSection}>
        <h2 style={{ textAlign: 'center', color: '#0b1220', marginTop: '48px' }}>The Team</h2>
        <div className={styles.teamGrid}>
          {team.map((member) => (
            <div key={member.id} className={styles.card}>
              {member.img ? (
                <img src={member.img} alt={member.name} className={styles.avatar} />
              ) : (
                <div className={styles.avatar} aria-hidden />
              )}
              <div className={styles.info}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.bio}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <p className={styles.footerNote}>Made with care · Light mode by default</p>
    </main>
  );
}


