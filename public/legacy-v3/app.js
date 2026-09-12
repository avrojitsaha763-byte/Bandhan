// =========================================================================
        // BANDHAN PHASE 2: Comprehensive Database & Interactive Architecture
        // =========================================================================

        let currentGlobalMode = 'all'; // 'all', 'soulmate', 'rental'
        const STORAGE_KEY = 'bandhan-demo-state-v3';
        let activeBookings = [];
        let activeMatches = [];

        function loadDemoState() {
            try {
                const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
                activeBookings = Array.isArray(saved.bookings) ? saved.bookings : [];
                activeMatches = Array.isArray(saved.matches) ? saved.matches : [];
            } catch {
                activeBookings = [];
                activeMatches = [];
            }
        }

        function saveDemoState() {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify({
                    bookings: activeBookings,
                    matches: activeMatches
                }));
            } catch {
                // Storage can be unavailable in privacy-restricted browsers.
            }
        }

        // 12 Authentically Crafted, Diverse Indian Profiles Across All Genders & Cities
        const companionsData = [
            {
                id: 'aarav',
                name: 'Aarav Singhania',
                age: 28,
                gender: 'man',
                identityDisplay: '👨 Cisgender Man',
                pronouns: 'He/Him',
                city: 'bengaluru',
                cityDisplay: 'Indiranagar, Bengaluru',
                ratePerHour: 1499,
                rating: 4.99,
                reviewsCount: 142,
                image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80',
                isSoulmate: true,
                isRental: true,
                occasionCategory: 'shaadi',
                tagline: 'AI Tech Founder • Polite with Elders • Sherwani Pro',
                bio: 'Tech founder from IIT Madras based in Indiranagar. Extremely charming conversationalist, reads Hindi and English literature, touches elders\' feet naturally, and lights up Sangeet dance floors with energetic Bhangra. Never breaks character.',
                traits: ['💐 Touches Elders\' Feet', '🕺 Sangeet Bhangra Pro', '👔 Boss Impression Expert'],
                languages: ['Hindi', 'English', 'Kannada'],
                education: 'B.Tech IIT Madras • AI Founder',
                hobbies: ['Indie Rock Guitar', 'Marathon Running', 'Filter Coffee'],
                vibeScore: 98,
                alibiSkill: 'Can discuss tech stocks, AI future, or family traditions effortlessly.'
            },
            {
                id: 'ananya',
                name: 'Dr. Ananya Sen',
                age: 27,
                gender: 'woman',
                identityDisplay: '👩 Cisgender Woman',
                pronouns: 'She/Her',
                city: 'kolkata',
                cityDisplay: 'Park Street, Kolkata & Delhi NCR',
                ratePerHour: 1699,
                rating: 4.98,
                reviewsCount: 189,
                image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
                isSoulmate: true,
                isRental: true,
                occasionCategory: 'family',
                tagline: 'Pediatric Resident • Kathak Dancer • Aunties\' Favorite',
                bio: 'Pediatric resident doctor with a warm, disarming smile. Trained Kathak dancer who looks breathtaking in sarees. Aunties instantly fall in love with her gentle demeanor, silencing marriage queries before they even start.',
                traits: ['🥻 Graceful Saree Draping', '🩺 Medical Doctor Vibe', '✨ Disarms Nosy Relatives'],
                languages: ['Bengali', 'Hindi', 'English'],
                education: 'MBBS, MD Pediatrics Resident',
                hobbies: ['Kathak Dancing', 'Rabindra Sangeet', 'Baking Pastries'],
                vibeScore: 99,
                alibiSkill: 'Perfect cover as the caring, accomplished partner your parents have always dreamed of.'
            },
            {
                id: 'zoya',
                name: 'Zoya Sheikh',
                age: 26,
                gender: 'trans-woman',
                identityDisplay: '⚧️ Transgender Woman',
                pronouns: 'She/Her',
                city: 'mumbai',
                cityDisplay: 'Bandra West, Mumbai',
                ratePerHour: 1899,
                rating: 4.99,
                reviewsCount: 115,
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80',
                isSoulmate: true,
                isRental: true,
                occasionCategory: 'corporate',
                tagline: 'Fashion Director • High-Society Poise • CEO Confidante',
                bio: 'Celebrity fashion stylist and creative director based in Bandra. High-energy, deeply articulate, and impeccably styled in couture. Ideal for elite corporate galas, fashion gatherings, and high-society weddings where presence matters.',
                traits: ['👑 High-Fashion Poise', '💎 Corporate Diplomat', '🌈 LGBTQ+ Icon'],
                languages: ['Hindi', 'English', 'Urdu'],
                education: 'NIFT Mumbai (Fashion Design)',
                hobbies: ['Contemporary Art', 'Pilates', 'Gourmet Wine Tasting'],
                vibeScore: 97,
                alibiSkill: 'Makes you look like the most cultured, forward-thinking person in the room.'
            },
            {
                id: 'devansh',
                name: 'Devansh Mathur',
                age: 29,
                gender: 'trans-man',
                identityDisplay: '⚧️ Transgender Man',
                pronouns: 'He/Him',
                city: 'delhi',
                cityDisplay: 'Cyber Hub, Gurugram & Delhi NCR',
                ratePerHour: 1599,
                rating: 4.97,
                reviewsCount: 96,
                image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=700&q=80',
                isSoulmate: true,
                isRental: true,
                occasionCategory: 'reunion',
                tagline: 'Fintech VP • Marathoner • Dignified & Attentive',
                bio: 'Product Lead at a leading fintech unicorn in Gurugram. Grounded, remarkably confident, and impeccably courteous. Arrives with flowers, opens doors, and stands proudly by your side at reunions or family gatherings.',
                traits: ['💼 Fintech Leadership', '🏃 Marathon Discipline', '🤝 Respectful & Protective'],
                languages: ['Hindi', 'English', 'Punjabi'],
                education: 'IIM Lucknow & B.Tech',
                hobbies: ['Distance Running', 'Podcasting', 'Specialty Pour-Over Coffee'],
                vibeScore: 98,
                alibiSkill: 'Leaves your school friends and exes in absolute awe of your choice.'
            },
            {
                id: 'rohan',
                name: 'Rohan Verma',
                age: 27,
                gender: 'non-binary',
                identityDisplay: '🌈 Non-Binary / Gender-Fluid',
                pronouns: 'They/Them',
                city: 'pune',
                cityDisplay: 'Koregaon Park, Pune & Bengaluru',
                ratePerHour: 1399,
                rating: 4.96,
                reviewsCount: 84,
                image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80',
                isSoulmate: true,
                isRental: true,
                occasionCategory: 'casual',
                tagline: 'UX Design Lead • Classical Sitarist • Pure Empathy',
                bio: 'Design lead and classical Hindustani musician. Deeply empathetic, warm conversationalist who creates an atmosphere of zero stress and total safety. Comfortable dressing in fluid Indo-Western or sharp tailored aesthetics.',
                traits: ['🎵 Classical Musician', '🎨 Design Visionary', '🕊️ Calm & Grounded'],
                languages: ['Hindi', 'English', 'Marathi'],
                education: 'National Institute of Design (NID)',
                hobbies: ['Sitar Recitals', 'Pottery', 'Film Photography'],
                vibeScore: 96,
                alibiSkill: 'Eases anxiety instantly; perfect for creative social circles and reunions.'
            },
            {
                id: 'meera',
                name: 'Meera Iyer',
                age: 26,
                gender: 'woman',
                identityDisplay: '👩 Cisgender Woman',
                pronouns: 'She/Her',
                city: 'chennai',
                cityDisplay: 'Besant Nagar, Chennai & Hyderabad',
                ratePerHour: 1450,
                rating: 4.99,
                reviewsCount: 162,
                image: 'https://images.unsplash.com/photo-1517456793572-1d8efd6dc135?auto=format&fit=crop&w=700&q=80',
                isSoulmate: false,
                isRental: true,
                occasionCategory: 'family',
                tagline: 'Brand Strategist • Filter Coffee Aficionado • Rishta Shield Pro',
                bio: 'Brand strategist at an international advertising firm. Fluent in English, Hindi, and Tamil. Specializes as a "Family Rishta Shield" to completely deflect marriage interrogation with charm and intellect.',
                traits: ['☕ Filter Coffee Connoisseur', '🛡️ Ultimate Rishta Shield', '📚 Avid Bookworm'],
                languages: ['Tamil', 'Hindi', 'English'],
                education: 'M.A. Media & Communications',
                hobbies: ['Carnatic Music', 'Solo Travel', 'Book Club Hosting'],
                vibeScore: 97,
                alibiSkill: 'Can steer any intrusive dinner conversation into a lively, laughing discussion.'
            },
            {
                id: 'vikram',
                name: 'Vikramaditya "Vikram" Rathore',
                age: 30,
                gender: 'man',
                identityDisplay: '👨 Cisgender Man',
                pronouns: 'He/Him',
                city: 'jaipur',
                cityDisplay: 'Civil Lines, Jaipur & Delhi NCR',
                ratePerHour: 1999,
                rating: 4.99,
                reviewsCount: 138,
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80',
                isSoulmate: true,
                isRental: true,
                occasionCategory: 'shaadi',
                tagline: 'Heritage Architect • Royal Equestrian • Regal Bandhgala Style',
                bio: 'Restoration architect working on Rajasthan heritage palaces. Carries an effortless regal charm, respects family elders deeply, and wears royal Bandhgalas with unmatched grace. A dream companion for grand Indian weddings.',
                traits: ['🏰 Regal Heritage Charm', '🏇 Equestrian & Polo', '👑 Royal Etiquette'],
                languages: ['Hindi', 'English', 'Rajasthani'],
                education: 'School of Planning & Architecture (SPA Delhi)',
                hobbies: ['Horseback Riding', 'Heritage Documentaries', 'Polo'],
                vibeScore: 99,
                alibiSkill: 'Makes every relative believe you are dating into an elite heritage family.'
            },
            {
                id: 'tara',
                name: 'Tara Mukherjee',
                age: 25,
                gender: 'woman',
                identityDisplay: '👩 Cisgender Woman',
                pronouns: 'She/Her',
                city: 'kolkata',
                cityDisplay: 'Salt Lake, Kolkata & Bengaluru',
                ratePerHour: 1299,
                rating: 4.97,
                reviewsCount: 78,
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80',
                isSoulmate: true,
                isRental: true,
                occasionCategory: 'casual',
                tagline: 'Astrophotographer • Wildlife Biologist • Pure Soul',
                bio: 'Wildlife researcher and astrophotographer. Adventurous, unpretentious, with a radiant laugh that lights up any room. Genuine listener who seeks a deep, meaningful soulmate connection or brings warm authenticity to gatherings.',
                traits: ['🔭 Astrophotography Pro', '🌿 Wildlife Conservation', '📸 Incredible Photographer'],
                languages: ['Bengali', 'Hindi', 'English'],
                education: 'M.Sc Wildlife Biology',
                hobbies: ['Stargazing', 'Trekking in Western Ghats', 'Indie Cinema'],
                vibeScore: 98,
                alibiSkill: 'Takes jaw-dropping Instagram-worthy couple photos of you two.'
            },
            {
                id: 'kavya',
                name: 'Kavya Nair',
                age: 28,
                gender: 'trans-woman',
                identityDisplay: '⚧️ Transgender Woman',
                pronouns: 'She/Her',
                city: 'mumbai',
                cityDisplay: 'Juhu, Mumbai & Kochi',
                ratePerHour: 1750,
                rating: 4.98,
                reviewsCount: 92,
                image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80',
                isSoulmate: true,
                isRental: true,
                occasionCategory: 'corporate',
                tagline: 'HR Vice President • Theater Artist • Master Negotiator',
                bio: 'Vice President of People & Culture at a media conglomerate and classical theater performer. Highly polished, empathetic, and fearless in handling difficult social situations. Defuses nosy relatives in seconds.',
                traits: ['🎭 Theater Eloquence', '💼 Corporate Leadership', '🛡️ Fearless Dignity'],
                languages: ['Malayalam', 'Hindi', 'English'],
                education: 'XLRI Jamshedpur (HRM)',
                hobbies: ['Stage Acting', 'Public Speaking', 'Contemporary Poetry'],
                vibeScore: 97,
                alibiSkill: 'Commands respect in any boardroom, cocktail lounge, or high-stakes dinner.'
            },
            {
                id: 'samir',
                name: 'Samir Khan',
                age: 27,
                gender: 'man',
                identityDisplay: '👨 Cisgender Man',
                pronouns: 'He/Him',
                city: 'hyderabad',
                cityDisplay: 'Jubilee Hills, Hyderabad & Delhi NCR',
                ratePerHour: 1350,
                rating: 4.96,
                reviewsCount: 110,
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80',
                isSoulmate: false,
                isRental: true,
                occasionCategory: 'family',
                tagline: 'Chartered Accountant • Standup Enthusiast • Dad\'s Best Friend',
                bio: 'Senior consultant at a Big 4 accounting firm who loves standup comedy. Has an uncanny gift for laughing at uncle\'s WhatsApp forwards, bonding over cricket with fathers, and diffusing family tensions with wholesome wit.',
                traits: ['🏏 Cricket Debates Pro', '😄 Laughs at Uncle\'s Jokes', '📊 Big 4 Finance Guru'],
                languages: ['Urdu', 'Hindi', 'Telugu', 'English'],
                education: 'Chartered Accountant (ICAI)',
                hobbies: ['Cricket Analytics', 'Standup Comedy', 'Biryani Crawls'],
                vibeScore: 98,
                alibiSkill: 'Your dad and uncles will want to adopt him within twenty minutes.'
            },
            {
                id: 'rhea',
                name: 'Rhea Deshmukh',
                age: 29,
                gender: 'non-binary',
                identityDisplay: '🌈 Non-Binary / Queer',
                pronouns: 'They/Them',
                city: 'mumbai',
                cityDisplay: 'Colaba, Mumbai',
                ratePerHour: 1650,
                rating: 4.99,
                reviewsCount: 104,
                image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80',
                isSoulmate: true,
                isRental: true,
                occasionCategory: 'reunion',
                tagline: 'Environmental Advocate • Animal Rescuer • Unshakable Dignity',
                bio: 'Environmental lawyer fighting for ocean conservation. Deeply principled, compassionate, and unwavering in their support for progressive values. Ideal for social reunions or seeking an authentic soulmate who shares a passion for making India better.',
                traits: ['⚖️ Environmental Law', '🐾 Animal Rescue Guardian', '🌟 Unshakable Poise'],
                languages: ['Marathi', 'Hindi', 'English'],
                education: 'NLSIU Bengaluru (Law)',
                hobbies: ['Scuba Diving', 'Animal Rescue', 'Documentary Filmmaking'],
                vibeScore: 99,
                alibiSkill: 'Will stand proudly by your side against any narrow-minded judgments.'
            },
            {
                id: 'arjun',
                name: 'Arjun Kapoor',
                age: 28,
                gender: 'man',
                identityDisplay: '👨 Cisgender Man',
                pronouns: 'He/Him',
                city: 'chandigarh',
                cityDisplay: 'Sector 9, Chandigarh & Delhi NCR',
                ratePerHour: 1550,
                rating: 4.98,
                reviewsCount: 151,
                image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=700&q=80',
                isSoulmate: false,
                isRental: true,
                occasionCategory: 'shaadi',
                tagline: 'Commercial Pilot • Bhangra Energy • High-Life Plus-One',
                bio: 'First officer flying Boeing 787 Dreamliners. Radiates infectious Punjabi warmth and energy. Owns pristine traditional bandhgalas and designer kurtas, tears up the Sangeet dance floor, and treats your family with highest respect.',
                traits: ['✈️ Airline Pilot Status', '🥁 Sangeet Dhol Champion', '✨ Effortless Charisma'],
                languages: ['Punjabi', 'Hindi', 'English'],
                education: 'Commercial Pilot License (DGCA)',
                hobbies: ['Aviation', 'Crossfit', 'Punjabi Folk Music'],
                vibeScore: 99,
                alibiSkill: 'Leaves your relatives gushing over your handsome, polite pilot partner.'
            }
        ];

        // Global Mode Switcher
        function switchGlobalMode(mode) {
            currentGlobalMode = mode;
            document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
            document.body.classList.remove('mode-soulmate-active', 'mode-rental-active', 'mode-all-active');

            const title = document.getElementById('banner-mode-title');
            const desc = document.getElementById('banner-mode-desc');
            const indicator = document.getElementById('active-mode-indicator');

            if (mode === 'soulmate') {
                document.getElementById('btn-mode-soulmate').classList.add('active');
                document.body.classList.add('mode-soulmate-active');
                title.innerHTML = '💖 Saccha Saathi Mode (सच्चा साथी)';
                desc.innerHTML = 'Browsing verified individuals seeking lifelong love, shared values, and authentic soulmate bonds across all genders.';
                indicator.innerText = 'Mode: Saccha Saathi (Soulmates)';
                document.getElementById('filter-mode-select').value = 'soulmate';
                showToast('💖 Switched to Saccha Saathi (Soulmate) Mode');
            } else if (mode === 'rental') {
                document.getElementById('btn-mode-rental').classList.add('active');
                document.body.classList.add('mode-rental-active');
                title.innerHTML = '🎭 Event Saathi Mode (इवेंट साथी)';
                desc.innerHTML = 'Browsing vetted plus-ones for Indian Shaadis, family gatherings, reunions, and corporate galas with 100% platonic dignity.';
                indicator.innerText = 'Mode: Event Saathi (Occasions)';
                document.getElementById('filter-mode-select').value = 'rental';
                showToast('🎭 Switched to Event Saathi (Rental) Mode');
            } else {
                document.getElementById('btn-mode-all').classList.add('active');
                document.body.classList.add('mode-all-active');
                title.innerHTML = '🌟 Dual-Purpose Indian Platform';
                desc.innerHTML = 'Choose between finding genuine life partners or booking a respectful, verified companion for social prestige.';
                indicator.innerText = 'Mode: All In One';
                document.getElementById('filter-mode-select').value = 'all';
                showToast('✨ Displaying All Profiles');
            }

            applyFilters();
        }

        // Render Profiles Grid
        function renderCompanions(list = companionsData) {
            const grid = document.getElementById('companions-grid');
            const countDisplay = document.getElementById('results-count');
            grid.innerHTML = '';
            countDisplay.innerText = list.length;

            if (list.length === 0) {
                grid.innerHTML = `
                    <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
                        <h3>No profiles found matching your current filters</h3>
                        <p style="margin-top: 0.5rem;">Try resetting your search or broadening the city/identity options.</p>
                        <button class="btn btn-outline" style="margin-top: 1.5rem;" onclick="resetAllFilters()">Reset All Filters</button>
                    </div>
                `;
                return;
            }

            list.forEach(c => {
                const card = document.createElement('div');
                card.className = `companion-card ${c.gender === 'man' || c.gender === 'trans-man' ? 'card-bf' : 'card-gf'}`;
                
                // Identify badge class
                let idClass = 'identity-woman';
                if (c.gender === 'man') idClass = 'identity-man';
                else if (c.gender.includes('trans')) idClass = 'identity-trans';
                else if (c.gender === 'non-binary') idClass = 'identity-nonbinary';

                // Mode availability badges
                let modePills = '';
                if (c.isSoulmate) modePills += `<span class="badge-pride-friendly" style="background: rgba(236,72,153,0.18); border-color: rgba(236,72,153,0.4); color: #f472b6;">💖 Soulmate</span> `;
                if (c.isRental) modePills += `<span class="badge-occasion">🎭 Event Partner</span>`;

                card.innerHTML = `
                    <div class="card-image-box">
                        <img src="${c.image}" alt="${c.name}" loading="lazy">
                        <div class="card-image-overlay">
                            <span class="badge-aadhaar">🛡️ Demo Verified</span>
                            <span class="card-rating">★ ${c.rating}</span>
                        </div>
                    </div>
                    
                    <div class="card-content">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.4rem; gap: 0.5rem; flex-wrap: wrap;">
                            <div style="display: flex; gap: 0.35rem; align-items: center; flex-wrap: wrap;">
                                <span class="identity-tag ${idClass}">${c.identityDisplay}</span>
                                ${modePills}
                            </div>
                            <div class="price-inr"><span class="currency-symbol">₹</span>${c.ratePerHour} <small>/ hr</small></div>
                        </div>

                        <h3 class="card-name">${c.name}, ${c.age}</h3>
                        <div style="font-size: 0.78rem; color: #f59e0b; font-weight: 600; margin-bottom: 0.4rem;">
                            📍 ${c.cityDisplay} • 🗣️ ${c.languages.join(', ')}
                        </div>
                        <p class="card-bio">${c.tagline}</p>
                        
                        <div class="card-traits">
                            ${c.traits.map(t => `<span class="trait-tag">${t}</span>`).join('')}
                        </div>

                        <div class="card-footer" style="display: flex; gap: 0.5rem; margin-top: 1rem; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 0.9rem;">
                            ${c.isRental ? `<button class="btn btn-primary btn-sm" style="flex: 1;" onclick="openBookingModalById('${c.id}')">Rent Saathi</button>` : ''}
                            ${c.isSoulmate ? `<button class="btn btn-outline btn-sm" style="flex: 1; border-color: rgba(236,72,153,0.4); color: #fbcfe8;" onclick="openSoulmateModalById('${c.id}')">💌 Dil Ka Paigaam</button>` : ''}
                            <button class="btn btn-outline btn-icon" onclick="openProfileModalById('${c.id}')" title="View Full Dossier">👁️</button>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        // Filter Logic
        function applyFilters() {
            const query = document.getElementById('search-input').value.toLowerCase().trim();
            const modeVal = document.getElementById('filter-mode-select').value;
            const genderVal = document.getElementById('filter-gender-select').value;
            const cityVal = document.getElementById('filter-city-select').value;
            const occasionVal = document.getElementById('filter-occasion-select').value;
            const sortVal = document.getElementById('sort-select').value;

            let filtered = companionsData.filter(c => {
                // Search query
                const matchQuery = !query || 
                    c.name.toLowerCase().includes(query) ||
                    c.tagline.toLowerCase().includes(query) ||
                    c.bio.toLowerCase().includes(query) ||
                    c.cityDisplay.toLowerCase().includes(query) ||
                    c.education.toLowerCase().includes(query) ||
                    c.languages.some(l => l.toLowerCase().includes(query)) ||
                    c.traits.some(t => t.toLowerCase().includes(query));

                // Mode filter
                let matchMode = true;
                if (modeVal === 'soulmate') matchMode = c.isSoulmate;
                if (modeVal === 'rental') matchMode = c.isRental;

                // Gender / Identity filter
                let matchGender = true;
                if (genderVal === 'woman') matchGender = (c.gender === 'woman' || c.gender === 'trans-woman');
                else if (genderVal === 'man') matchGender = (c.gender === 'man' || c.gender === 'trans-man');
                else if (genderVal === 'trans-woman') matchGender = (c.gender === 'trans-woman');
                else if (genderVal === 'trans-man') matchGender = (c.gender === 'trans-man');
                else if (genderVal === 'non-binary') matchGender = (c.gender === 'non-binary');

                // City filter
                let matchCity = true;
                if (cityVal !== 'all') {
                    matchCity = c.city.includes(cityVal) || c.cityDisplay.toLowerCase().includes(cityVal);
                }

                // Occasion filter
                let matchOccasion = true;
                if (occasionVal !== 'all') {
                    matchOccasion = c.occasionCategory === occasionVal;
                }

                return matchQuery && matchMode && matchGender && matchCity && matchOccasion;
            });

            // Sorting
            if (sortVal === 'rating') {
                filtered.sort((a, b) => b.rating - a.rating);
            } else if (sortVal === 'price-low') {
                filtered.sort((a, b) => a.ratePerHour - b.ratePerHour);
            } else if (sortVal === 'price-high') {
                filtered.sort((a, b) => b.ratePerHour - a.ratePerHour);
            }

            renderCompanions(filtered);
        }

        // Scenario Pills Click Handlers
        document.querySelectorAll('.scenario-pill').forEach(pill => {
            pill.addEventListener('click', () => {
                document.querySelectorAll('.scenario-pill').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');

                const cat = pill.getAttribute('data-filter-category');
                if (cat === 'all') {
                    document.getElementById('filter-occasion-select').value = 'all';
                    document.getElementById('filter-gender-select').value = 'all';
                } else if (cat === 'trans-safe') {
                    document.getElementById('filter-gender-select').value = 'trans-woman';
                } else {
                    document.getElementById('filter-occasion-select').value = cat;
                }
                applyFilters();
            });
        });

        // Search Input Live Listener
        document.getElementById('search-input').addEventListener('input', applyFilters);

        function filterByCity(cityKey) {
            document.getElementById('filter-city-select').value = cityKey;
            applyFilters();
        }

        function resetAllFilters() {
            document.getElementById('search-input').value = '';
            document.getElementById('filter-mode-select').value = 'all';
            document.getElementById('filter-gender-select').value = 'all';
            document.getElementById('filter-city-select').value = 'all';
            document.getElementById('filter-occasion-select').value = 'all';
            document.getElementById('sort-select').value = 'featured';
            switchGlobalMode('all');
        }

        // =========================================================================
        // BOOKING MODAL (Event Saathi Rental)
        // =========================================================================
        let currentSelectedCompanion = null;

        function openBookingModalById(id) {
            const comp = companionsData.find(c => c.id === id);
            if (!comp) return;
            currentSelectedCompanion = comp;

            document.getElementById('modal-companion-name').innerText = `Rent ${comp.name}`;
            document.getElementById('modal-companion-subtitle').innerText = `${comp.identityDisplay} • ${comp.cityDisplay} • Demo Verified`;
            document.getElementById('modal-avatar').src = comp.image;
            document.getElementById('modal-summary-name').innerText = comp.name;
            document.getElementById('modal-summary-tags').innerHTML = `
                <span class="badge-aadhaar">🛡️ Demo Verified</span>
                <span class="badge-occasion">${comp.tagline}</span>
            `;
            document.getElementById('modal-summary-rate').innerHTML = `<span class="currency-symbol">₹</span>${comp.ratePerHour} <small>/ hr</small>`;

            // Default event date to tomorrow
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            document.getElementById('booking-date').value = tomorrow.toISOString().split('T')[0];

            calculateTotalCost();
            document.getElementById('booking-modal').classList.add('active');
        }

        function closeBookingModal() {
            document.getElementById('booking-modal').classList.remove('active');
        }

        function calculateTotalCost() {
            if (!currentSelectedCompanion) return;
            const multiplier = parseFloat(document.getElementById('booking-duration-select').value);
            let total = currentSelectedCompanion.ratePerHour;
            if (multiplier === 1) total = currentSelectedCompanion.ratePerHour;
            else if (multiplier === 2) total = Math.round(currentSelectedCompanion.ratePerHour * 1.8);
            else if (multiplier === 3) total = Math.round(currentSelectedCompanion.ratePerHour * 3);

            document.getElementById('modal-total-display').innerHTML = `<span class="currency-symbol">₹</span>${total.toLocaleString('en-IN')}`;
        }

        function selectUpiMethod(elem, method) {
            document.querySelectorAll('.upi-method-card').forEach(c => c.classList.remove('selected'));
            elem.classList.add('selected');
            const upiInput = document.getElementById('upi-id-input');
            upiInput.value = '';
            upiInput.placeholder = method === 'card' ? 'Demo payment reference (optional)' : 'Demo UPI ID (optional)';
        }

        function handleBookingSubmit(e) {
            e.preventDefault();
            if (!document.getElementById('maryada-agreement').checked) {
                alert('Please accept the Code of Maryada (Platonic & Dignified Guarantee).');
                return;
            }

            const venue = document.getElementById('booking-venue').value;
            const occasion = document.getElementById('booking-occasion').options[document.getElementById('booking-occasion').selectedIndex].text;
            const date = document.getElementById('booking-date').value;
            const attire = document.getElementById('booking-attire').options[document.getElementById('booking-attire').selectedIndex].text;
            const totalText = document.getElementById('modal-total-display').innerText;

            const newBooking = {
                type: 'rental',
                id: 'BDN-' + Math.floor(100000 + Math.random() * 900000),
                companion: currentSelectedCompanion,
                venue: venue,
                occasion: occasion,
                date: date,
                attire: attire,
                amount: totalText,
                status: 'Confirmed (Demo Verified)',
                timestamp: new Date().toLocaleTimeString()
            };

            activeBookings.unshift(newBooking);
            saveDemoState();
            updateBookingsDrawer();
            closeBookingModal();
            showToast(`🎉 Reservation confirmed with ${currentSelectedCompanion.name}! This is a demo reservation; no real booking or WhatsApp message is sent.`);
            openCartDrawer();
        }

        // =========================================================================
        // SOULMATE CONNECT MODAL (Dil Ka Paigaam)
        // =========================================================================
        let currentSoulmateCandidate = null;

        function openSoulmateModalById(id) {
            const comp = companionsData.find(c => c.id === id);
            if (!comp) return;
            currentSoulmateCandidate = comp;

            document.getElementById('soulmate-name').innerText = comp.name;
            document.getElementById('soulmate-avatar').src = comp.image;
            document.getElementById('soulmate-identity-badge').innerHTML = `
                <span class="identity-tag ${comp.gender.includes('trans') ? 'identity-trans' : (comp.gender === 'man' ? 'identity-man' : 'identity-woman')}">${comp.identityDisplay}</span>
            `;
            document.getElementById('soulmate-city-profession').innerText = `${comp.cityDisplay} • ${comp.education}`;
            document.getElementById('soulmate-vibe-score').innerText = `✨ ${comp.vibeScore}% Vibe Compatibility`;
            document.getElementById('soulmate-message').value = `Hi ${comp.name}, your profile caught my eye! I really value your passion for ${comp.hobbies[0]} and your grounded perspective. Would love to connect!`;

            document.getElementById('soulmate-modal').classList.add('active');
        }

        function closeSoulmateModal() {
            document.getElementById('soulmate-modal').classList.remove('active');
        }

        function sendDilKaPaigaam() {
            if (!currentSoulmateCandidate) return;
            const msg = document.getElementById('soulmate-message').value;
            const firstDateIdea = document.getElementById('soulmate-first-date').options[document.getElementById('soulmate-first-date').selectedIndex].text;

            const newMatch = {
                type: 'soulmate',
                id: 'SACCHA-' + Math.floor(10000 + Math.random() * 90000),
                candidate: currentSoulmateCandidate,
                message: msg,
                dateIdea: firstDateIdea,
                status: 'Paigaam Sent (Awaiting Mutual Heart)',
                timestamp: 'Just now'
            };

            activeMatches.unshift(newMatch);
            saveDemoState();
            updateBookingsDrawer();
            closeSoulmateModal();
            showToast(`💌 Dil Ka Paigaam delivered to ${currentSoulmateCandidate.name}! Privacy safeguarded.`);
            openCartDrawer();
        }

        // =========================================================================
        // PROFILE DOSSIER MODAL
        // =========================================================================
        function openProfileModalById(id) {
            const comp = companionsData.find(c => c.id === id);
            if (!comp) return;

            document.getElementById('dossier-name').innerText = `${comp.name} — Confidential Dossier`;
            const body = document.getElementById('dossier-body');

            body.innerHTML = `
                <div class="profile-hero" style="display: grid; grid-template-columns: 220px 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
                    <img src="${comp.image}" alt="${comp.name}" class="profile-big-avatar" style="width: 100%; height: 260px; object-fit: cover; border-radius: var(--radius-lg); border: 2px solid var(--border-glow);">
                    <div>
                        <div style="display: flex; gap: 0.4rem; align-items: center; flex-wrap: wrap; margin-bottom: 0.5rem;">
                            <span class="badge-aadhaar">🛡️ Demo Verification</span>
                            <span class="identity-tag identity-trans">${comp.identityDisplay} (${comp.pronouns})</span>
                            <span class="badge-pride-friendly">★ ${comp.rating} (${comp.reviewsCount} verified reviews)</span>
                        </div>
                        <h2 style="font-size: 1.6rem; color: #ffffff;">${comp.name}, ${comp.age}</h2>
                        <div style="color: #f59e0b; font-weight: 700; margin-top: 0.2rem;">📍 ${comp.cityDisplay}</div>
                        <p style="margin-top: 0.8rem; color: #cbd5e1; font-size: 0.95rem; line-height: 1.6;">${comp.bio}</p>
                    </div>
                </div>

                <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-md); padding: 1.2rem; margin-bottom: 1.5rem;">
                    <h4 style="color: #f8fafc; margin-bottom: 0.6rem; font-size: 1rem;">🎓 Education & Background Credentials</h4>
                    <p style="font-size: 0.88rem; color: #94a3b8;">${comp.education} • Fluent in: <strong style="color: #ffffff;">${comp.languages.join(', ')}</strong></p>
                    <p style="font-size: 0.88rem; color: #94a3b8; margin-top: 0.4rem;">Hobbies & Interests: ${comp.hobbies.join(' • ')}</p>
                    <p style="font-size: 0.88rem; color: #f59e0b; margin-top: 0.4rem;"><strong>🛡️ Special Social Alibi Skill:</strong> ${comp.alibiSkill}</p>
                </div>

                <div class="maryada-pledge" style="margin-top: 0; margin-bottom: 1.5rem;">
                    <div class="maryada-title"><span>🇮🇳 Maryada & Authenticity Assurance</span></div>
                    <p style="font-size: 0.85rem; color: #cbd5e1;">This prototype uses illustrative verification credentials. No real identity check or NDA is performed by this demo.</p>
                </div>

                <div style="display: flex; gap: 0.75rem; justify-content: flex-end;">
                    ${comp.isRental ? `<button class="btn btn-primary" onclick="closeProfileModal(); openBookingModalById('${comp.id}')">Rent Saathi (₹${comp.ratePerHour}/hr)</button>` : ''}
                    ${comp.isSoulmate ? `<button class="btn btn-outline" style="border-color: #ec4899; color: #f472b6;" onclick="closeProfileModal(); openSoulmateModalById('${comp.id}')">💌 Dil Ka Paigaam</button>` : ''}
                </div>
            `;

            document.getElementById('profile-modal').classList.add('active');
        }

        function closeProfileModal() {
            document.getElementById('profile-modal').classList.remove('active');
        }

        // =========================================================================
        // CONNECTIONS & BOOKINGS DRAWER
        // =========================================================================
        function updateBookingsDrawer() {
            const body = document.getElementById('cart-body');
            const totalCount = activeBookings.length + activeMatches.length;
            document.getElementById('cart-counter').innerText = totalCount;

            if (totalCount === 0) {
                body.innerHTML = `
                    <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
                        <div style="font-size: 2.5rem; margin-bottom: 0.8rem;">📭</div>
                        <h4>No active bookings or matches yet</h4>
                        <p style="font-size: 0.85rem; margin-top: 0.3rem;">Explore profiles to book an event companion or express interest in a soulmate.</p>
                    </div>
                `;
                return;
            }

            let html = '';

            // Render Bookings
            if (activeBookings.length > 0) {
                html += `<div style="font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #f59e0b; margin-bottom: 0.6rem;">🎭 Event Companion Reservations (${activeBookings.length})</div>`;
                activeBookings.forEach((b, idx) => {
                    html += `
                        <div class="cart-item" style="display: flex; gap: 0.75rem; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-md); padding: 0.9rem; margin-bottom: 0.8rem;">
                            <img src="${b.companion.image}" style="width: 50px; height: 50px; border-radius: var(--radius-full); object-fit: cover;">
                            <div style="flex: 1;">
                                <div style="display: flex; justify-content: space-between;">
                                    <strong style="color: #ffffff; font-size: 0.95rem;">${b.companion.name}</strong>
                                    <span style="color: #10b981; font-size: 0.75rem; font-weight: 700;">${b.amount}</span>
                                </div>
                                <div style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 0.2rem;">${b.occasion} • ${b.date}</div>
                                <div style="font-size: 0.75rem; color: #6ee7b7; margin-top: 0.2rem;">📍 ${b.venue}</div>
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem;">
                                    <span style="font-size: 0.72rem; color: #94a3b8;">Pass ID: #${b.id}</span>
                                    <button class="btn btn-sm btn-outline" style="padding: 0.2rem 0.6rem; font-size: 0.75rem;" onclick="cancelBooking(${idx})">Cancel</button>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }

            // Render Matches
            if (activeMatches.length > 0) {
                html += `<div style="font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #ec4899; margin: 1.2rem 0 0.6rem 0;">💖 Saccha Saathi Interests (${activeMatches.length})</div>`;
                activeMatches.forEach((m, idx) => {
                    html += `
                        <div class="cart-item" style="display: flex; gap: 0.75rem; background: rgba(236,72,153,0.05); border: 1px solid rgba(236,72,153,0.2); border-radius: var(--radius-md); padding: 0.9rem; margin-bottom: 0.8rem;">
                            <img src="${m.candidate.image}" style="width: 50px; height: 50px; border-radius: var(--radius-full); object-fit: cover;">
                            <div style="flex: 1;">
                                <div style="display: flex; justify-content: space-between;">
                                    <strong style="color: #ffffff; font-size: 0.95rem;">${m.candidate.name}</strong>
                                    <span style="color: #f472b6; font-size: 0.75rem; font-weight: 700;">Sent</span>
                                </div>
                                <div style="font-size: 0.78rem; color: #cbd5e1; margin-top: 0.2rem;">Idea: ${m.dateIdea}</div>
                                <div style="font-size: 0.74rem; color: #fbcfe8; margin-top: 0.3rem;">"${m.message.substring(0, 60)}..."</div>
                            </div>
                        </div>
                    `;
                });
            }

            body.innerHTML = html;
        }

        function cancelBooking(index) {
            const b = activeBookings[index];
            activeBookings.splice(index, 1);
            saveDemoState();
            updateBookingsDrawer();
            showToast(`Cancelled reservation #${b.id}. Refund simulation complete; no real payment was processed.`);
        }

        function openCartDrawer() {
            document.getElementById('cart-drawer').classList.add('active');
            document.getElementById('cart-drawer-overlay').classList.add('active');
        }

        function closeCartDrawer() {
            document.getElementById('cart-drawer').classList.remove('active');
            document.getElementById('cart-drawer-overlay').classList.remove('active');
        }

        document.getElementById('open-cart-btn').addEventListener('click', openCartDrawer);

        function printAlibiPass() {
            if (activeBookings.length === 0) {
                alert('No active bookings to generate an alibi pass for yet!');
                return;
            }
            window.print();
        }

        // =========================================================================
        // DESI BACKSTORY & ALIBI GENERATOR
        // =========================================================================
        const desiBackstories = {
            family: [
                "We met 8 months ago at a cozy rooftop cafe in Indiranagar, Bengaluru. We accidentally took each other's cold brews and struck up a debate about 90s Bollywood music and startup life. We've been inseparable on weekends since. My partner currently works as an accomplished professional, respects elders, and was thrilled to come meet everyone tonight!",
                "We crossed paths at a public heritage walk in South Delhi near Lodhi Garden. We both got separated from the group while admiring Mughal architecture, grabbed masala chai, and talked for three straight hours about family values and future dreams.",
                "We met at a Diwali charity drive organized by mutual friends in Bandra, Mumbai. We were paired up distributing sweets and gifts to children, and I was immediately drawn to how compassionate, humble, and polite they are."
            ],
            shaadi: [
                "We met at a high-profile corporate tech summit at Taj Lands End in Mumbai. After hours of dull keynote speeches, we snuck out to the seaside promenade for cutting chai and realized we had identical humor. They are excited to dance at the Sangeet and meet the extended family!",
                "We met at an art gallery opening in Kolkata. We debated modern Indian art over ginger tea, laughed about family wedding pressures, and promised we'd be each other's trusted plus-one when wedding season arrived."
            ],
            reunion: [
                "We met at a delayed airport lounge in Bengaluru while both rushing to catch red-eye flights. We shared a table, helped each other finish laptop work, and bonded over our wild college memories. Now we live in the same city and they came tonight to celebrate with my old friends!",
                "We met at a TEDx conference in Gurugram where they were speaking on digital transformation. We spent the after-party networking dinner talking about life and ambitions, and we've been supporting each other's dreams ever since."
            ],
            corporate: [
                "We met during an executive leadership symposium in Mumbai's BKC financial hub. Their sharp insights on market strategies and gracious poise caught my eye immediately. We have collaborated on multiple industry initiatives and decided to attend tonight's gala together.",
                "We were introduced by a mutual advisor at an Indo-European business summit. We found common ground in sustainable venture building and have been close confidantes ever since."
            ],
            casual: [
                "We met in the poetry section of an indie bookstore in Hauz Khas. We both reached for the same collection of Gulzar's shayaris, smiled, and ended up having coffee until the cafe closed.",
                "We both attend the same weekend running club around Cubbon Park. After a 10k run, we grabbed south Indian breakfast at CTR and realized our life vibes matched effortlessly."
            ]
        };

        document.getElementById('generate-story-btn').addEventListener('click', () => {
            const scenario = document.getElementById('story-scenario').value;
            const cityText = document.getElementById('story-city').options[document.getElementById('story-city').selectedIndex].text;
            const duration = document.getElementById('story-duration').options[document.getElementById('story-duration').selectedIndex].text;
            const career = document.getElementById('story-career').options[document.getElementById('story-career').selectedIndex].text;

            const pool = desiBackstories[scenario] || desiBackstories['family'];
            const randomStory = pool[Math.floor(Math.random() * pool.length)];

            const fullScript = `"${randomStory} We have been dating for ${duration.split(' ')[0].toLowerCase()} months now. They are based out of ${cityText.split('(')[0].trim()} and work as a ${career.toLowerCase()}."`;
            document.getElementById('story-output-text').innerText = fullScript;
            showToast('🪄 Fresh Desi Backstory generated!');
        });

        document.getElementById('copy-story-btn').addEventListener('click', () => {
            const text = document.getElementById('story-output-text').innerText;
            navigator.clipboard.writeText(text).then(() => {
                showToast('📋 Desi Alibi script copied to clipboard!');
            }).catch(() => {
                showToast('📋 Script ready in memory!');
            });
        });

        // FAQ Accordion Toggle
        document.querySelectorAll('.faq-question').forEach(btn => {
            btn.addEventListener('click', () => {
                const item = btn.parentElement;
                item.classList.toggle('active');
                const icon = btn.querySelector('.faq-icon');
                if (icon) icon.innerText = item.classList.contains('active') ? '−' : '+';
            });
        });

        // Toast Notification Function
        function showToast(message) {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.innerHTML = `<span>🇮🇳</span> ${message}`;
            container.appendChild(toast);

            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateY(10px)';
                setTimeout(() => toast.remove(), 300);
            }, 3200);
        }

        // ESC Key listener to close modals
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeBookingModal();
                closeSoulmateModal();
                closeProfileModal();
                closeCartDrawer();
            }
        });

        // Click outside modals to close
        document.getElementById('booking-modal').addEventListener('click', (e) => {
            if (e.target.id === 'booking-modal') closeBookingModal();
        });
        document.getElementById('soulmate-modal').addEventListener('click', (e) => {
            if (e.target.id === 'soulmate-modal') closeSoulmateModal();
        });
        document.getElementById('profile-modal').addEventListener('click', (e) => {
            if (e.target.id === 'profile-modal') closeProfileModal();
        });

        // Initial state + render
        loadDemoState();
        const bookingDate = document.getElementById('booking-date');
        if (bookingDate) {
            bookingDate.min = new Date().toISOString().split('T')[0];
        }
        renderCompanions();
        updateBookingsDrawer();
