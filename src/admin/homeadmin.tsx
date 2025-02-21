import { Component, createSignal, onMount } from "solid-js";
import { useNavigate } from "@solidjs/router";
import styles from "./homeadmin.module.css";
import logo from "../assets/fonts/logo1.png";

const Admin: Component = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = createSignal("Dashboard");

  // Sample data for stats
  const agentStats = [

  ];
onMount(() => {
  document.querySelectorAll('.sidebar *').forEach(el => {
    el.addEventListener('mouseenter', () => {
      console.log('Hovering:', el);
    });
  });
});
  // Sample customer data
  const customers = [
    { 
      status: "In Progress", 
      id: "#9933", 
      name: "Guy Hawkins", 
      address: "2972 Westheimer Rd.", 
      email: "willie.jennings@example.com", 
      phone: "+995-445-553-55", 
      dob: "Dec 4, 2019 21:42" 
    },
    { 
      status: "Closed", 
      id: "#5560", 
      name: "Marvin McKinney", 
      address: "8502 Preston Rd.", 
      email: "felicia.reid@example.com", 
      phone: "+56-955-510-20", 
      dob: "Dec 30, 2019 07:52" 
    },
    { 
      status: "On hold", 
      id: "#5043", 
      name: "Darrell Steward", 
      address: "7713 Lockman Rd.", 
      email: "tim.jennings@example.com", 
      phone: "+995-213-552-25", 
      dob: "Jan 18, 2020 14:21" 
    }
  ];

  // Weekly chat data for chart
  const chartData = [
    { day: "Sat", percentage: 20 },
    { day: "Sun", percentage: 40 },
    { day: "Mon", percentage: 55 },
    { day: "Tue", percentage: 90 },
    { day: "Wed", percentage: 60 },
    { day: "Thu", percentage: 70 },
    { day: "Fri", percentage: 80 }
  ];

  // Monthly call data for chart
  const callData = [
    { month: "Jan", calls: 20 },
    { month: "Feb", calls: 35 },
    { month: "Mar", calls: 45 },
    { month: "Apr", calls: 30 },
    { month: "May", calls: 35 },
    { month: "Jun", calls: 50 },
    { month: "Jul", calls: 30 },
    { month: "Aug", calls: 25 },
    { month: "Sep", calls: 40 },
    { month: "Oct", calls: 35 },
    { month: "Nov", calls: 40 },
    { month: "Dec", calls: 30 }
  ];

  const getStatusClass = (status) => {
    switch(status.toLowerCase()) {
      case "in progress": return styles.statusInProgress;
      case "closed": return styles.statusClosed;
      case "on hold": return styles.statusOnHold;
      default: return "";
    }
  };

  return (
    <section class={styles.layout}>
      {/* Left sidebar */}
      <aside class={styles.sidebar}>
        <div class={styles.logoWrapper}>
          {/* Replace the text logo with the imported image logo */}
          <div class={styles.logo}>
            <img src={logo} alt="Xirents Logo" class={styles.customLogo} />
          </div>
        </div>
        <nav class={styles.sidebarNav}>
          <ul>
            <li class={styles.navItem} title="Dashboard">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                <rect x="14" y="14" width="7" height="7" rx="1"></rect>
              </svg>
            </li>
           
            <li class={styles.navItem} title="Messages">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </li>
            <li class={styles.navItem} title="Users">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </li>
            <li class={styles.navItem} title="PlayStation">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M6 12h12a4 4 0 0 1 4 4v2a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1H9v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a4 4 0 0 1 4-4z"></path>
    <circle cx="8.5" cy="13.5" r="1.5"></circle>
    <circle cx="15.5" cy="13.5" r="1.5"></circle>
    <line x1="9" y1="16" x2="9" y2="16"></line>
    <line x1="15" y1="16" x2="15" y2="16"></line>
    <line x1="12" y1="16" x2="12" y2="16"></line>
    <line x1="12" y1="18" x2="12" y2="18"></line>
  </svg>
</li>

            <li class={styles.navItemActive} title="Apps">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </li>
          </ul>
          <div class={styles.bottomNav}>
            <li class={styles.navItem} title="Settings">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </li>
          </div>
        </nav>
      </aside>
      
      {/* Main content */}
      <main class={styles.mainContent}>
        {/* Header */}
        <header class={styles.header}>
          <div class={styles.headerTitle}>Dashboard Admin XIIRENT</div>
          <div class={styles.headerActions}>
            <div class={styles.searchBar}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input type="text" placeholder="Search here..." />
            </div>
            <div class={styles.headerIcons}>
              <button class={styles.iconButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </button>
              <button class={styles.iconButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </button>
              <div class={styles.avatarContainer}>
                <div class={styles.avatar}>
                  <img src="src/assets/fonts/logo1.png" alt="User" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <div class={styles.dashboardContent}>
          {/* Agent stats */}
          <div class={styles.statsRow}>
            {agentStats.map(stat => (
              <div class={styles.statCard} style={{ "background-color": stat.color }}>
               
                <div class={styles.avatarRow}>
                  <div class={styles.avatarStacked}>
                    <div class={styles.stackedImg}><img src="https://via.placeholder.com/30" alt="User" /></div>
                    <div class={styles.stackedImg}><img src="https://via.placeholder.com/30" alt="User" /></div>
                    <div class={styles.stackedImg}><img src="https://via.placeholder.com/30" alt="User" /></div>
                    <div class={styles.stackedMore}>+</div>
                  </div>
                  <button class={styles.moreButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Live chat and call monitoring charts */}
          <div class={styles.chartsRow}>
            <div class={styles.chartCard}>
              <div class={styles.chartHeader}>
                <h3>Live Chat Status</h3>
                <button class={styles.moreButton}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </button>
              </div>
              <div class={styles.barChart}>
                {chartData.map(item => (
                  <div class={styles.chartColumn}>
                    <div class={styles.barContainer}>
                      <div 
                        class={`${styles.bar} ${item.day === "Tue" ? styles.activeBar : ''}`} 
                        style={{ "height": `${item.percentage}%` }}
                      >
                        {item.day === "Tue" && (
                          <div class={styles.starRating}>
                            <span>★★★★★</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div class={styles.barLabel}>{item.day}</div>
                  </div>
                ))}
              </div>
            </div>

            <div class={styles.chartCard}>
              <div class={styles.chartHeader}>
                <h3>Call Monitoring</h3>
                <div class={styles.chartActions}>
                  <div class={styles.dropdownButton}>
                    Yearly
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              <div class={styles.callChart}>
                {callData.map(item => (
                  <div class={styles.callColumn}>
                    <div class={styles.callBarContainer}>
                      <div class={styles.callBarBg}></div>
                      <div 
                        class={styles.callBar} 
                        style={{ "height": `${(item.calls / 50) * 100}%` }}
                      ></div>
                    </div>
                    <div class={styles.barLabel}>{item.month}</div>
                  </div>
                ))}
                <div class={styles.callLegend}>
                  <div class={styles.legendItem}>
                    <div class={styles.legendColor}></div>
                    <div class={styles.legendText}>Incoming Calls</div>
                  </div>
                  <div class={styles.legendPercentage}>80%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer information table */}
          <div class={styles.tableSection}>
            <div class={styles.tableHeader}>
              <h3>XIIRENT SEAT / WARNET</h3>
              <div class={styles.tableActions}>
         
              </div>
            </div>
            <div class={styles.tableContainer}>
              <table class={styles.dataTable}>
             
             
              </table>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Admin;