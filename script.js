document.addEventListener("DOMContentLoaded", function () {
  let downSeatPrice = 4000,
    topSeatPrice = downSeatPrice * 0.5,
    orderAmount = 0,
    seatsAmount = 0,
    orderedTickets = [],
    request = new XMLHttpRequest(),
    train = {
      tickets: ''
    };

  const seats = document.querySelectorAll(".seat"),
    ticketOrder = document.querySelector(".ticket-order"),
    displaySeats = document.querySelector(".display-seat"),
    roubles = document.querySelector(".roubles"),
    tooltip = document.querySelector(".tooltip"),
    coupe = document.querySelector(".coupe"),
    coupeType = document.querySelector(".coupe-type"),
    roublesHint = document.querySelector(".roubles-hint"),
    url = "order_ticket.php",
    trainForm = document.querySelector('.flex-items-order');

  seats.forEach((seat) => {
    seat.addEventListener("click", function () {
      if (!seat.classList.contains("ordered-seat")) {
        seat.classList.toggle("selected-seat");
        const selectedSeats = document.querySelectorAll(".selected-seat");
        if (selectedSeats.length > 0) {
          ticketOrder.classList.remove("hidden");
        } else {
          ticketOrder.classList.add("hidden");
        }
        if (
          seat.classList.contains("topseat") &&
          seat.classList.contains("selected-seat")
        ) {
          orderAmount += topSeatPrice;
          seatsAmount += 1;
          orderedTickets.push(
            "Купе: №" +
            seat.innerHTML +
            ", Тип купе: Верхнее, Цена: " +
            topSeatPrice +
            " Рублей"
          );
        } else {
          if (
            seat.classList.contains("topseat") &&
            !seat.classList.contains("selected-seat")
          ) {
            orderAmount -= topSeatPrice;
            seatsAmount -= 1;
            let orderInfo =
              "Купе: №" +
              seat.innerHTML +
              ", Тип купе: Верхнее, Цена: " +
              topSeatPrice +
              " Рублей";
            orderInfoIndex = orderedTickets.indexOf(orderInfo);
            if (orderInfoIndex !== -1) {
              orderedTickets.splice(orderInfoIndex, 1);
            }
          } else {
            if (
              seat.classList.contains("downseat") &&
              seat.classList.contains("selected-seat")
            ) {
              orderAmount += downSeatPrice;
              seatsAmount += 1;
              orderedTickets.push(
                "Купе: №" +
                seat.innerHTML +
                ", Тип купе: Нижнее, Цена: " +
                downSeatPrice +
                " Рублей"
              );
            } else {
              orderAmount -= downSeatPrice;
              seatsAmount -= 1;
              let orderInfo =
                "Купе: №" +
                seat.innerHTML +
                ", Тип купе: Нижнее, Цена: " +
                downSeatPrice +
                " Рублей";
              orderInfoIndex = orderedTickets.indexOf(orderInfo);
              if (orderInfoIndex !== -1) {
                orderedTickets.splice(orderInfoIndex, 1);
              }
            }
          }
        }
        displaySeats.innerHTML = seatsAmount;
        roubles.innerHTML = orderAmount.toFixed(2);
      }
    });
    
    seat.addEventListener("mouseover", function () {
      if (!seat.classList.contains("ordered-seat")) {
        tooltip.classList.remove("hidden");
        window.onmousemove = function (e) {
          let x = e.clientX,
            y = e.clientY;
          tooltip.style.top = y + 15 + "px";
          tooltip.style.left = x + 15 + "px";
        };
        coupe.innerHTML = "№" + seat.innerHTML + " Купе";
        if (seat.classList.contains("topseat")) {
          coupeType.innerHTML = "Верхнее";
          roublesHint.innerHTML = topSeatPrice.toFixed(2) + " ₽";
        } else {
          coupeType.innerHTML = "Нижнее";
          roublesHint.innerHTML = downSeatPrice.toFixed(2) + " ₽";
        }
      }
    });
    seat.addEventListener("mouseout", function () {
      if (!seat.classList.contains("ordered-seat")) {
        const tooltip = document.querySelector(".tooltip");
        tooltip.classList.add("hidden");
        window.onmousemove = function (e) {
          let x = 0,
            y = 0;
          tooltip.style.top = x + "px";
          tooltip.style.left = y + "px";
        };
      }
    });
  });

  trainForm.addEventListener('submit', function (event) {
    if (orderedTickets.length > 0) {
      event.preventDefault();
      train.tickets = orderedTickets;
      orderAmount = 0;
      seatsAmount = 0;
      ticketOrder.classList.add('hidden');
      const selectedSeats = document.querySelectorAll(".selected-seat");
      selectedSeats.forEach((selectedSeat) => {
        selectedSeat.classList.remove('selected-seat');
        selectedSeat.classList.add('ordered-seat');
      });
      request.open('POST', url, true);
      request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
          console.log(request.responseText);
        }
      };
      let data = JSON.stringify(train);
      orderedTickets = [];
      train.tickets = [];
      request.send(data);
    }
  });
});
