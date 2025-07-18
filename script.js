document.addEventListener('DOMContentLoaded', () => {
    // --- Data Produk ---
    const products = [
        // Konsol
        {
            id: 'ps5-disk',
            type: 'console',
            name: 'PlayStation 5 Disk Edition',
            image: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2023/2/27/9014a585-c8f1-4b46-bebe-4a2e69b92902.jpg',
            price: 150000,
            description: 'Konsol PS5 standar dengan drive disk, nikmati game fisik & digital.'
        },
        {
            id: 'ps5-digital',
            type: 'console',
            name: 'PlayStation 5 Digital Edition',
            image: 'https://awsimages.detik.net.id/visual/2023/10/11/ps5-playstationcom_169.png',
            price: 130000,
            description: 'Konsol PS5 versi digital ramping, khusus game unduhan.'
        },
        {
            id: 'ps4-pro',
            type: 'console',
            name: 'PlayStation 4 Pro',
            image: 'https://images.tokopedia.net/img/cache/700/OJWluG/2022/6/24/0b210adb-16a9-43b8-b47c-a1e33716ade4.jpg',
            price: 100000,
            description: 'PS4 Pro dengan performa 4K, grafis lebih tajam.'
        },
        {
            id: 'ps4-slim',
            type: 'console',
            name: 'PlayStation 4 Slim',
            image: 'https://images-cdn.ubuy.co.id/64c004160e5b630ac57e7c49-sony-playstation-4-500gb-slim-system.jpg',
            price: 80000,
            description: 'PS4 Slim, lebih ringkas, hemat daya, dan ringan.'
        },
        // Permainan
        {
            id: 'game-god-of-war',
            type: 'game',
            name: 'God of War Ragnarök',
            image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg',
            price: 50000,
            description: 'Petualangan epik Kratos & Atreus di mitologi Nordik.'
        },
        {
            id: 'game-fifa',
            type: 'game',
            name: 'EA Sports FC 25',
            image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2669320/ec3fb7747fd8080ef53d7686e0d98c5abe1f51f1/header.jpg',
            price: 40000,
            description: 'Game sepak bola realistis terbaru.'
        },
        {
            id: 'game-spiderman',
            type: 'game',
            name: 'Marvel\'s Spider-Man 2',
            image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2651280/header.jpg',
            price: 55000,
            description: 'Bertarung sebagai Peter Parker & Miles Morales.'
        },
        {
            id: 'game-cod',
            type: 'game',
            name: 'Call of Duty: Modern Warfare III',
            image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2519060/header.jpg',
            price: 45000,
            description: 'Game tembak-menembak militer intens.'
        },
        // Perangkat VR & Aksesoris
        {
            id: 'vr-psvr2',
            type: 'vr-accessory',
            name: 'PlayStation VR2',
            image: 'https://mms.businesswire.com/media/20230222005126/en/1718672/5/PSVR2_16X9.jpg',
            price: 70000,
            description: 'Headset VR generasi terbaru untuk PS5.'
        },
        {
            id: 'acc-dualsense',
            type: 'vr-accessory',
            name: 'DualSense Controller',
            image: 'https://eshop.hkcsl.com/on/demandware.static/-/Sites-master-hkt-hk/default/dwb97b9adb/images/4128511scol/4128511_1__2.jpg',
            price: 25000,
            description: 'Kontroler haptik canggih untuk PS5.'
        },
        {
            id: 'acc-dualshock4',
            type: 'vr-accessory',
            name: 'DualShock 4 Controller',
            image: 'https://plazakamera.com/wp-content/uploads/2023/08/Jual-PS4-DualShock-4-Wireless-Controller-Black-harga-terbaik.jpg',
            price: 20000,
            description: 'Kontroler standar untuk PS4.'
        },
        {
            id: 'acc-monitor',
            type: 'vr-accessory',
            name: 'Monitor Gaming 24"',
            image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-177785231/lg_lg_24gs60f-b_monitor_gaming_24-inch_ultra_gear_full_hd_180_hz_ips_1ms_-gtg-_hdr10_full02_ivlspdj1.jpeg',
            price: 60000,
            description: 'Monitor Full HD responsif untuk pengalaman gaming.'
        }
    ];

    let cart = []; // Array untuk menyimpan item di keranjang

    // --- Elemen DOM ---
    const consoleListDiv = document.getElementById('console-list');
    const gameListDiv = document.getElementById('game-list');
    const vrAccessoriesListDiv = document.getElementById('vr-accessories-list');
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    const cartCountSpan = document.getElementById('cart-count');
    const checkoutBtn = document.getElementById('checkout-btn');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const checkoutFormSection = document.getElementById('checkout');
    const checkoutForm = document.getElementById('checkout-form');
    const checkoutConfirmation = document.getElementById('checkout-confirmation');
    const backToCartBtn = document.getElementById('back-to-cart-btn');
    const continueShoppingBtn = document.getElementById('continue-shopping-btn');
    const exploreBtn = document.getElementById('exploreBtn');

    // --- Fungsi Bantuan ---
    function formatRupiah(amount) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(amount);
    }

    function createProductCard(product) {
        const div = document.createElement('div');
        div.classList.add('product-item');
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${formatRupiah(product.price)} / Hari</p>
            <button class="btn primary-btn add-to-cart-btn" data-id="${product.id}">Tambah ke Keranjang</button>
        `;
        return div;
    }

    function renderProducts() {
        consoleListDiv.innerHTML = '';
        gameListDiv.innerHTML = '';
        vrAccessoriesListDiv.innerHTML = '';

        products.forEach(product => {
            if (product.type === 'console') {
                consoleListDiv.appendChild(createProductCard(product));
            } else if (product.type === 'game') {
                gameListDiv.appendChild(createProductCard(product));
            } else if (product.type === 'vr-accessory') {
                vrAccessoriesListDiv.appendChild(createProductCard(product));
            }
        });

        // Add event listeners for "Add to Cart" buttons
        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.dataset.id;
                addToCart(productId);
            });
        });
    }

    function updateCartDisplay() {
        cartItemsDiv.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            emptyCartMessage.style.display = 'block';
            checkoutBtn.disabled = true;
        } else {
            emptyCartMessage.style.display = 'none';
            checkoutBtn.disabled = false;
            cart.forEach(item => {
                const product = products.find(p => p.id === item.id);
                if (product) {
                    const cartItemDiv = document.createElement('div');
                    cartItemDiv.classList.add('cart-item');
                    cartItemDiv.innerHTML = `
                        <img src="${product.image}" alt="${product.name}">
                        <div class="cart-item-details">
                            <h4>${product.name}</h4>
                            <p>${formatRupiah(product.price)} / Hari</p>
                        </div>
                        <div class="cart-item-actions">
                            <input type="number" min="1" value="${item.quantity}" data-id="${item.id}" class="item-quantity">
                            <button class="btn remove-btn" data-id="${item.id}"><i class="fas fa-trash-alt"></i> Hapus</button>
                        </div>
                    `;
                    cartItemsDiv.appendChild(cartItemDiv);
                    total += product.price * item.quantity;
                }
            });
        }

        cartTotalSpan.textContent = formatRupiah(total);
        cartCountSpan.textContent = cart.length;

        // Add event listeners for quantity change and remove button
        document.querySelectorAll('.item-quantity').forEach(input => {
            input.addEventListener('change', (event) => {
                const productId = event.target.dataset.id;
                const newQuantity = parseInt(event.target.value);
                updateCartQuantity(productId, newQuantity);
            });
        });

        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.dataset.id;
                removeFromCart(productId);
            });
        });
    }

    function addToCart(productId) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ id: productId, quantity: 1 });
        }
        updateCartDisplay();
        alert('Produk berhasil ditambahkan ke keranjang!');
    }

    function updateCartQuantity(productId, newQuantity) {
        const itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex > -1) {
            if (newQuantity > 0) {
                cart[itemIndex].quantity = newQuantity;
            } else {
                cart.splice(itemIndex, 1); // Remove if quantity is 0
            }
        }
        updateCartDisplay();
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCartDisplay();
        alert('Produk dihapus dari keranjang.');
    }

    // --- Event Listeners ---
    exploreBtn.addEventListener('click', () => {
        document.getElementById('consoles').scrollIntoView({ behavior: 'smooth' });
    });

    checkoutBtn.addEventListener('click', () => {
        document.getElementById('cart').style.display = 'none'; // Sembunyikan keranjang
        checkoutFormSection.style.display = 'block'; // Tampilkan form checkout
        checkoutConfirmation.style.display = 'none'; // Sembunyikan konfirmasi
        document.getElementById('checkout').scrollIntoView({ behavior: 'smooth' });
    });

    backToCartBtn.addEventListener('click', () => {
        document.getElementById('cart').style.display = 'block'; // Tampilkan keranjang
        checkoutFormSection.style.display = 'none'; // Sembunyikan form checkout
    });

    checkoutForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Mencegah reload halaman
        // Di sini Anda akan mengirim data pesanan ke backend (simulasi)
        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;
        const telepon = document.getElementById('telepon').value;
        const alamat = document.getElementById('alamat').value;
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;

        // Validasi sederhana tanggal
        if (new Date(startDate) > new Date(endDate)) {
            alert('Tanggal selesai sewa tidak boleh lebih awal dari tanggal mulai sewa.');
            return;
        }

        console.log('Pesanan dikirim:', {
            items: cart,
            nama, email, telepon, alamat, startDate, endDate,
            total: cartTotalSpan.textContent
        });

        // Simulasi proses pesanan berhasil
        alert('Pesanan Anda berhasil diproses! Terima kasih.');
        cart = []; // Kosongkan keranjang
        updateCartDisplay();
        checkoutForm.reset(); // Reset form

        // Tampilkan konfirmasi
        checkoutForm.style.display = 'none';
        checkoutConfirmation.style.display = 'block';
    });

    continueShoppingBtn.addEventListener('click', () => {
        checkoutFormSection.style.display = 'none';
        checkoutConfirmation.style.display = 'none';
        document.getElementById('cart').style.display = 'block'; // Sembunyikan keranjang lagi
        document.getElementById('hero').scrollIntoView({ behavior: 'smooth' }); // Kembali ke beranda
    });

    // --- Inisialisasi ---
    renderProducts();
    updateCartDisplay();
    // Sembunyikan bagian checkout saat pertama kali load
    checkoutFormSection.style.display = 'none';
});
