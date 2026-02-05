
  function Button(){
    return(
      <button>
        Click me
      </button>
      );
  }

  const team = [
    { id: 1, name: 'Jabez', role: 'The Gooner', bio: 'Coding and gaming enthusiast.', img: '/JABEZ.jpg' },
    { id: 2, name: 'Jake', role: 'The Masterbaiter', bio: 'Makes everything look pretty.', img: '/JAKE.png' },
    { id: 3, name: 'Marco', role: 'The Porn Addict', bio: 'Loves to build cool stuff.' , img: '/MARCO.jpg'}
  ];
      


  export default function Home() {
    const containerStyle = {
      backgroundColor: '#2f2c2b', 
      minHeight: '100vh',       
      padding: '20px'
    };
    return (
      
      <main style={containerStyle}>
        <section>
          <h1>About Us</h1>
          <p>Welcome! We are dedicated to building cool things with React.</p>
        </section>

        <section style={{ marginTop: '40px' }}>
          <h2>The Team</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {team.map(member => (
              <div key={member.id} style={{ border: '1px solid #ccc', padding: '15px' }}>
                <h3>{member.name}</h3>
                <p><strong>{member.role}</strong></p>
                <p>{member.bio}</p>
                {member.img && (
            <img 
        src={member.img} 
        alt={member.name} 
        style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }} 
/>
    )}
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }


