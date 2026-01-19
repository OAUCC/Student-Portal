import React, { useState } from "react";

const AdminLogin = () => {
  const [matricNumber, setMatricNumber] = useState("");
  const [password, setPassword] = useState("");
  const [session, setSession] = useState("2023/2024");
  const [semester, setSemester] = useState("Harmattan");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ matricNumber, password, session, semester });
  };

  return (
    <div style={styles.pageContainer}>
      <header style={styles.header}>
        <img
          src="../assets/images/Oau_logo.png" // Replace with the actual logo path
          alt="OAU Logo"
          style={styles.logo}
        />
        <h1 style={styles.title}>Obafemi Awolowo University</h1>
        <p style={styles.subtitle}>Hostel Management Portal</p>
      </header>
      <div style={styles.formContainer}>
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="text"
            placeholder="MATRIC No/Staff ID"
            value={matricNumber}
            onChange={(e) => setMatricNumber(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <select
            value={session}
            onChange={(e) => setSession(e.target.value)}
            style={styles.select}
          >
            <option value="2023/2024">2023/2024</option>
            <option value="2022/2023">2022/2023</option>
            <option value="2021/2022">2021/2022</option>
          </select>
          <select
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            style={styles.select}
          >
            <option value="Harmattan">Harmattan</option>
            <option value="Rain">Rain</option>
          </select>
          <a href="/forgot-password" style={styles.forgotPassword}>
            Forgot password?
          </a>
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
      <footer style={styles.footer}>
        ©2024 Obafemi Awolowo University
      </footer>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  logo: {
    width: "60px",
    height: "60px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  subtitle: {
    fontSize: "14px",
    color: "#555",
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
    width: "100%",
  },
  select: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
    width: "100%",
  },
  forgotPassword: {
    fontSize: "12px",
    color: "#007bff",
    textDecoration: "none",
    alignSelf: "flex-end",
    margin: "5px 0",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
  footer: {
    marginTop: "20px",
    fontSize: "12px",
    color: "#777",
  },
};

export default AdminLogin;
