import { Component, createSignal, Show, onMount } from 'solid-js';
import Navbar from '../component/Navbar';
import styles from '../booking/bookingps.module.css';
import { useNavigate } from '@solidjs/router';
import Swal from 'sweetalert2';

const BookingPS: Component = () => {
  const [selectedSeats, setSelectedSeats] = createSignal<string[]>([]);
  const [step, setStep] = createSignal(0);
  const [selectedHours, setSelectedHours] = createSignal(1);
  const [promoCode, setPromoCode] = createSignal('');
  const [bookedSeats, setBookedSeats] = createSignal<string[]>(JSON.parse(localStorage.getItem('bookedSeatsPS') || '[]'));
  const navigate = useNavigate();
  const hoursOptions = [1, 2, 3, 4, 5];
  const playstation3 = [['A1', 'A2', 'A3', 'A4', 'A5'],['A6', 'A7', 'A8', 'A9', 'A10']];
  const playstation4 = [['B1', 'B2', 'B3', 'B4', 'B5'],['B6', 'B7', 'B8', 'B9', 'B10']];
  const playstation5 = [['C1', 'C2', 'C3', 'C4','C5'], ['C6','C7','C8','C9','C10']];
  const vipPricePerHour = 5000;
  const nonVipPricePerHour = 4000;

  const cancelBooking = () => {
    setSelectedSeats([]);  
    setStep(0);
  };

  onMount(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === "true";
    if (!isLoggedIn) {
      Swal.fire('Akses Ditolak!', 'Silakan login terlebih dahulu.', 'error');
      setTimeout(() => navigate('/login'), 2000);
    }

    const storedBookings = localStorage.getItem('bookedSeatsPS');
    if (storedBookings) {
      setBookedSeats(JSON.parse(storedBookings));
    }
  });

  const toggleSeat = (seatId: string) => {
    if (bookedSeats().includes(seatId)) {
      Swal.fire('Oops!', 'Kursi ini sudah dipesan!', 'warning');
      return;
    }
    
    setSelectedSeats(prev => {
      if (prev.includes(seatId)) {
        return prev;
      }
      return [...prev, seatId];
    });
    setStep(1);
  };

  const calculateTotal = () => {
    return selectedSeats().reduce((total, seat) => {
      const pricePerHour = seat.startsWith('E') ? vipPricePerHour : nonVipPricePerHour;
      return total + pricePerHour * selectedHours();
    }, 0);
  };

  const confirmBooking = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === "true";
    if (!isLoggedIn) {
      Swal.fire("Error!", "Anda harus login terlebih dahulu.", "error");
      return;
    }

    const currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!currentUser) {
      Swal.fire("Error!", "Data pengguna tidak ditemukan.", "error");
      return;
    }

    const newBooking = {
      username: currentUser.username,
      email: currentUser.email,
      seats: selectedSeats(),
      hours: selectedHours(),
      total: calculateTotal(),
      timestamp: new Date().toISOString(),
    };

    const existingBookings = JSON.parse(localStorage.getItem("bookingsPS")) || [];
    localStorage.setItem("bookingsPS", JSON.stringify([...existingBookings, newBooking]));
    localStorage.setItem("bookedSeatsPS", JSON.stringify([...bookedSeats(), ...selectedSeats()]));

    setBookedSeats([...bookedSeats(), ...selectedSeats()]);
    Swal.fire("Berhasil!", "Pemesanan Anda telah disimpan.", "success");
    setSelectedSeats([]);
    setStep(0);
  };

  return (
    <div class={styles.container}>
      <img
        src="src/users/assets/jude.png"
        alt="valorant"
        loading="lazy"
        class={styles.backgroundImageJude}
      />
      <Navbar />
      <main class={styles.mainContent}>
        <div class={styles.bookingContainer}>
          <div class={styles.gridContainer}>
            {/* Non-VIP Section */}
            <div class={styles.nonVipSection}>
              <h3>PLAYSTATION 3 :</h3>
              <div class={styles.nonVipGrid}>
                {playstation3.map(row => (
                  <div class={styles.row}>
                    {row.map(seatId => (
                      <button
                        class={`${styles.seat} ${selectedSeats().includes(seatId) ? styles.selected : ''} ${bookedSeats().includes(seatId) ? styles.booked : ''}`}
                        onClick={() => toggleSeat(seatId)}
                      >
                        {seatId}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div class={styles.playstation4}>
              <h3>PLAYSTATION 4 :</h3>
              <div class={styles.nonVipGrid}>
                {playstation4.map(row => (
                  <div class={styles.row}>
                    {row.map(seatId => (
                      <button
                        class={`${styles.seat} ${selectedSeats().includes(seatId) ? styles.selected : ''} ${bookedSeats().includes(seatId) ? styles.booked : ''}`}
                        onClick={() => toggleSeat(seatId)}
                      >
                        {seatId}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {/* VIP Section */}
            <div class={styles.vipSection}>
              <h3>PLAYSTATION 5 :</h3>
              <div class={styles.vipGrid}>
                {playstation5.map(row => (
                  <div class={styles.row}>
                    {row.map(seatId => (
                      <button
                        class={`${styles.seat} ${styles.vipSeat} ${selectedSeats().includes(seatId) ? styles.selected : ''} ${bookedSeats().includes(seatId) ? styles.booked : ''}`}
                        onClick={() => toggleSeat(seatId)}
                      >
                        {seatId}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

        {/* Legend */}
        <div class={styles.legend}>
          <h1>SEAT INFORMATION :</h1>
          <div class={styles.legendItem}>
            <div class={`${styles.legendBox} ${styles.selected}`}></div>
            <span>Selected</span>
          </div>
          <div class={styles.legendItem}>
            <div class={`${styles.legendBox} ${styles.booked}`}></div>
            <span>Booked</span>
          </div>
          <div class={styles.legendItem}>
            <div class={`${styles.legendBox} ${styles.normal}`}></div>
            <span>Normal</span>
          </div>
          <div class={styles.legendItem}>
            <div class={`${styles.legendBox} ${styles.vip}`}></div>
            <span>VIP</span>
          </div>
        </div>
        </div>
      </main>

      {/* Popup Seat Selection */}
      <Show when={step() === 1}>
        <div class={styles.popupOverlay}>
          <div class={styles.popup1}>
            <h2>Your Selected Seats:</h2>
            <p></p>
            <button class={styles.popupButton1} onClick={() => setStep(2)}>NEXT</button>
          </div>
        </div>
      </Show>

      <Show when={step() === 2}>
      <div class={styles.popupOverlay}>
        <div class={styles.timePromoPopup}>
          <button 
            class={styles.backButton}
            onClick={() => setStep(1)}
          >
            BACK
          </button>

          <div class={styles.content}>
            <div class={styles.timeSelectors}>
              <div>
                <h2>Choose time</h2>
                <select
                  class={styles.timeSelect}
                  value={selectedHours()}
                  onChange={(e) => setSelectedHours(Number(e.currentTarget.value))}
                >
                  <option value={1}>1 hour</option>
                  <option value={2}>2 hours</option>
                  <option value={3}>3 hours</option>
                </select>
              </div>

              <div>
                <h2>Waiting time</h2>
                <select class={styles.timeSelect}>
                  <option value="0">No waiting time</option>
                  <option value="15">15 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="45">45 minutes</option>
                </select>
              </div>
            </div>

            <div class={styles.promoSection}>
              <h2>Promo code</h2>
              <div class={styles.promoInputWrapper}>
                <input
                  type="text"
                  class={styles.promoInput}
                  placeholder="Enter promo code"
                  value={promoCode()}
                  onInput={(e) => setPromoCode(e.currentTarget.value)}
                />
                <button class={styles.applyButton}>
                  APPLY
                </button>
              </div>
            </div>

            <div class={styles.totalSection}>
              <div class={styles.totalLabel}>TOTAL :</div>
              <div class={styles.totalAmount}>RP. {calculateTotal().toLocaleString('id-ID')}</div>

            </div>

            <button 
              class={styles.nextButton}
              onClick={() => setStep(3)}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </Show>
                
      {/* Popup Confirmation */}
      <Show when={step() === 3}>
        <div class={styles.popupOverlay}>
          <div class={styles.popupConfirm}>
            <p class={styles.totalstep3Text}>TOTAL <span class={styles.totalAmount3}>RP.{calculateTotal().toLocaleString('id-ID')}</span></p>
            <p class={styles.confirmationText}>Apakah anda yakin ingin melanjutkan?</p>
            <div class={styles.buttonContainer}>
              <button class={styles.confirmYesButton} onClick={confirmBooking}>YA</button>
              <button class={styles.confirmNoButton} onClick={cancelBooking}>TIDAK</button>
            </div>
          </div>
        </div>
      </Show>
  </div>
);
};


export default BookingPS;
