<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Train Tickets</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <section class="train">
        <img src="train.svg" alt="train" class='train-image'>
        <div class="seats">
            <div class="top-seats">
                <div class="seat topseat">2</div>
                <div class="seat topseat">4</div>
                <div class="seat topseat">6</div>
                <div class="seat topseat">8</div>
                <div class="seat topseat">10</div>
                <div class="seat topseat">12</div>
                <div class="seat topseat">14</div>
                <div class="seat topseat">16</div>
                <div class="seat topseat">18</div>
                <div class="seat topseat">20</div>
                <div class="seat topseat">22</div>
                <div class="seat topseat">24</div>
                <div class="seat topseat">26</div>
                <div class="seat topseat">28</div>
                <div class="seat topseat">30</div>
                <div class="seat topseat">32</div>
                <div class="seat topseat">34</div>
                <div class="seat topseat">36</div>
            </div>
            <div class="down-seats">
                <div class="seat downseat">1</div>
                <div class="seat downseat">3</div>
                <div class="seat downseat">5</div>
                <div class="seat downseat">7</div>
                <div class="seat downseat">9</div>
                <div class="seat downseat">11</div>
                <div class="seat downseat">13</div>
                <div class="seat downseat">15</div>
                <div class="seat downseat">17</div>
                <div class="seat downseat">19</div>
                <div class="seat downseat">21</div>
                <div class="seat downseat">23</div>
                <div class="seat downseat">25</div>
                <div class="seat downseat">27</div>
                <div class="seat downseat">29</div>
                <div class="seat downseat">31</div>
                <div class="seat downseat">33</div>
                <div class="seat downseat">35</div>
            </div>
        </div>
    </section>

    <section class="ticket-order hidden">
        <div class="container">
            <hr>
            <form class="flex-items-order" method="POST" action="order_ticket.php">
                <div class="message">Выбрано <span class='red-text display-seat'>0</span> мест на сумму <span class='red-text roubles'>0</span> рублей</div>
                <button class='continue-order' type="submit">Продолжить</button>
            </form>
        </div>
    </section>

    <div class="tooltip hidden">
        <div class="coupe">№0 Купе</div>
        <div class="coupe-type">Верхнее/Нижнее</div>
        <div class="roubles-hint">0 рублей</div>
    </div>

    <script src="script.js"></script>
</body>

</html>