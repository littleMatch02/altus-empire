var seeder = require('mongoose-seed')
const db = require('./config/keys').mongoURI;

seeder.connect(db, function() {
    seeder.loadModels([
        'models/Dispensary.js',
        'models/Rating.js',
        'models/User.js'
    ])

    seeder.clearModels(['dispensary'], function() {
        seeder.populateModels(dispensaryData, function() {
            seeder.disconnect()
        })
    })

    seeder.populateModels(userData, function() {
        seeder.disconnect()
    })

    seeder.clearModels(['rating'], function() {
        seeder.populateModels(ratingData, function() {
            seeder.disconnect()
        })
    })
})

const userData = [
    {
        'model' : 'user',
        'documents' : [
            {
                username: "demouser",
                email: 'demo@app.com',
                dob: "Sun Feb 15 1987 19:00:00 GMT-0500 (Eastern Standard Time)",
                password: 'password'
            }
        ]
    }
]

const dispensaryData = [
    {
        'model' : 'dispensary',
        'documents' : [
            {
                _id: '60633b3910b96e2370668783',
                dispensaryName: 'Sunny Side Shop',
                description: 'Sunnyside is a new kind of medical cannabis shop offering adults 21+ a friendly place to explore high-quality marijuana products to improve everyday wellness.',
                latitude: 40.71535,
                longitude: -73.95827,
                phone: 9177931107,
                address: '178 N 4th St, Brooklyn, NY',
                website: 'https://www.sunnyside.shop/',
                postphoto: "sunnyside.jpg",
                zipCode: 11211,
                avgRating: 4.5
            },
            {
                _id: '60633b3910b96e2370668785',
                dispensaryName: 'Col Care',
                description: 'With a focus on clean cultivation, superior quality, and positive patient outcomes, we offer brands and products that meet high standards of potency, purity, and predictability.',
                latitude: 40.69278,
                longitude: -73.99122,
                phone: 2122710925,
                address: '44 Court St, Brooklyn, NY',
                website: 'https://col-care.com/',
                postphoto: "bestores.jpeg",
                zipCode: 11201,
                avgRating: 3.8
            },
            {
                _id: '60633b3910b96e2370668784',
                dispensaryName: 'Col Care',
                description: 'With a focus on clean cultivation, superior quality, and positive patient outcomes, we offer brands and products that meet high standards of potency, purity, and predictability.',
                latitude: 40.73279,
                longitude: -73.98674,
                phone: 6464537178,
                address: '212 E 14th St, New York, NY',
                website: 'https://col-care.com/',
                postphoto: "colcare.jpg",
                zipCode: 10003,
                avgRating: 3.0
            },
            {
                _id: '60633b3910b96e2370668786',
                dispensaryName: 'BEstores',
                description: 'Be. Brooklyn is your community resource for medical cannabis, CBD and education. We have pharmacists on-site whenever we are open to work through each patients symptoms and treatment plans. We offer discounts for first-time patients, Veterans and those receiving financial assistance through state programs. You must have a valid medical cannabis card to purchase cannabis products, but anyone can come talk to our staff to ask questions about cannabis.',
                latitude: 40.68133,
                longitude: -73.97597,
                phone: 2122573145,
                address: '202 Flatbush Ave, Brooklyn, NY',
                website: 'https://bestores.com/',
                postphoto: "colcareny.jpeg",
                zipCode: 11217,
                avgRating: 5.0
            },
            {
                dispensaryName: 'Vireo Health',
                description: 'Vireo Health aims to provide medicinal marijuana to New York residents with a NY medical marijuana card—minus the hassle. Staffed by a knowledgeable team of physicians, pharmacists, scientists, and horticulturalists, Vireo Health shares its wealth of expertise of cannabis-based remedies with patients, all while ensuring that each transaction abides by current New York regulations.',
                latitude: 40.738361,
                longitude: -73.886108,
                phone: 8444847366,
                address: '89-55 Queens Blvd, Queens, NY',
                website: 'https://vireohealth.com/ny/dispensaries/queens/',
                postphoto: "VireoHealth.jpg",
                zipCode: 11373,
                avgRating: 4.4
            },
            {
                dispensaryName: 'Curaleaf NY Queens',
                description: 'Welcome to our home. Where the grass is not just greener, it’s better. Some people walk in knowing what they’re looking for— a tincture to ease the pain or perhaps a flower to make the day brighter. Then there are those who walk in curious, ready to start their journey with this ancient plant.',
                latitude: 40.72097,
                longitude: -73.84521,
                phone: 6469682872,
                address: '10718 70th Rd, Queens, NY',
                website: 'https://curaleaf.com/',
                postphoto: "curaleaf.jpg",
                zipCode: 11375,
                avgRating: 3
            },
            {
                dispensaryName: 'The Botanist',
                description: 'Our approach to patient care is attentive and detailed. Every patient and their registered caregivers complete an in-depth consultation with our highly-educated on-site pharmacists. Once we are familiar with our patients’ qualified medical conditions, they are then referred to our knowledgeable dispensary technicians who help them find the right cannabis-based remedies for their symptoms.',
                latitude: 40.703869,
                longitude: -73.815231,
                phone: 9178104540,
                address: '138-72 Queens Blvd, Jamaica, NY',
                website: 'https://www.shopbotanist.com/locations/queens-medical-marijuana/',
                postphoto: "theBotanist.jpg",
                zipCode: 11435,
                avgRating: 4.8
            },
            {
                dispensaryName: 'Veriflife Medical Marijuana Dispensary ',
                description: 'Your story is our story. In fact, we made it our purpose. Verilife believes that everyone should have access to the best possible care. From the products we curate to the personalized customer care we provide, we put our belief into action with truth and transparency. This is our purpose and its only natural that we find ourselves here—showing the many ways marijuana can, and does, improve quality of life.',
                latitude: 40.80963,
                longitude: -73.88116,
                phone: 7188422001,
                address: '405 Hunts Point Ave, The Bronx, NY',
                website: 'https://www.verilife.com/ny/location/bronx?utm_source=google&utm_medium=organic&utm_campaign=bronx_gmb_location',
                postphoto: "verilife.jpg",
                zipCode: 10474,
                avgRating: 4.8
            },
            {
                dispensaryName: 'Etain Health',
                description: 'A major figure in Irish mythology (and the namesake of our company), Etain was an unrivaled beauty whose story is one of perseverance and transformation. Like our Granny Franny, she reminds us that no matter the challenges life brings, an enduring spirit will always win out in the end—even if in a new, unexpected form.',
                latitude: 40.76022,
                longitude: -73.96537,
                phone: 9144377898,
                address: '242 E 58th St, New York, NY',
                website: 'https://etainhealth.com/',
                postphoto: "EtainHealth.jpg",
                zipCode: 10022,
                avgRating: 3.9
            },
            {
                dispensaryName: 'Hemped NYC',
                description: 'Our story began in Boulder, Colorado on March 3, 2014. This was our first attempt at a harvest. For months and months we began cultivating and harvesting, harvesting and cultivating. The outcome was not what we were hoping for. Although we were getting good at harvesting the hemp flower, It seemed to be very meticulous work. And as opposed to the extensive knowledge and track record of harvesting the Marijuana plant, there was much less information out there on growing the hemp leaf. Both Marijuana and Hemp, are indeed from the same plant species, but quit different in the way that they are harvested and cultivated.',
                latitude: 40.7309461,
                longitude: -74.0026585,
                phone: 8444436733,
                address: '247 Bleecker St, New York, NY',
                website: 'http://www.hempednyc.com/',
                postphoto: "hempedNYC.jpg",
                zipCode: 10014,
                avgRating: 3.9
            },
            {
                dispensaryName: 'CBD Oil New York',
                description: 'CBDPure is a grower and producer of high-quality full-spectrum cannabidiol ("CBD") oil derived from certified organic-standards industrial hemp grown in Colorado and Washington. Our line of CBD products are all made from hemp grown locally, without the use of harmful pesticides and herbicides. The genetics of the industrial hemp plant we use has been chosen for its high CBD content and is grown with great care in order to produce a high quality product you can count on, that is tested and certified by third-party labs for every batch.',
                latitude: 40.7042695,
                longitude: -74.0117256,
                phone: 9177281649,
                address: '80 Broad St suite 950, New York, NY',
                website: 'https://www.cbdpure.com/?AFFID=451362',
                postphoto: "CBDPURE.jpg",
                zipCode: 10004,
                avgRating: 4.5
            },
            {
                dispensaryName: 'Medical Marijuana Consolutations of NYC',
                description: 'Our Right NY is a full service Medical Marijuana Consultation Clinic. We strive to make obtaining a Medical Marijuana License as simple and discreet as possible. Our Representatives and Doctors have many years in the field and a vast knowledge in all aspects of Medical Marijuana.',
                latitude: 40.8104684,
                longitude: -73.946384,
                phone: 3478613009,
                address: '164 W 128th St #4d, New York, NY',
                website: 'https://ourrightny.com/',
                postphoto: "MMconsolutantNYC.jpg",
                zipCode: 10027,
                avgRating: 4.5
            },
            {
                dispensaryName: 'Hidden Hemp',
                description: 'It is believed that CBD oil is one of the most efficient and fast absorbent ways of consumption of CBD. In our labs we have been able to formulate a variety of CBD based products. Whether you are looking for Full Spectrum CBD oil, Broad Spectrum (non-THC) CBD oil, pure Isolate CBD oil, or specific condition targeted CBD formula called Simply Hemped – we have you covered.',
                latitude: 40.61639,
                longitude: -73.9302696,
                phone: 6316407679,
                address: '2196 Flatbush Ave, Brooklyn, NY',
                website: 'https://www.hempednyc.com/',
                postphoto: "HiddenHemp.jpg",
                zipCode: 11234,
                avgRating: 3.7
            },
            {
                dispensaryName: 'Be Staten Island',
                description: 'Be. has three locations throughout New York and is a trusted to partner for the medical cannabis patients and caregivers throughout the state. Our on-site pharmacists and dispensary associates are here to help guide new and existing patients through the process of patient registration and the appropriate product selection for each individual’s needs.',
                latitude: 40.5710962,
                longitude: -74.1113987,
                phone: 2122573145,
                address: '338 New Dorp Ln, Staten Island, NY',
                website: 'https://bestores.com/',
                postphoto: "Bestorestatenisland.jpg",
                zipCode: 10306,
                avgRating: 3.7
            },
            {
                dispensaryName: 'Be Staten Island',
                description: 'Be. has three locations throughout New York and is a trusted to partner for the medical cannabis patients and caregivers throughout the state. Our on-site pharmacists and dispensary associates are here to help guide new and existing patients through the process of patient registration and the appropriate product selection for each individual’s needs.',
                latitude: 40.5710962,
                longitude: -74.1113987,
                phone: 2122573145,
                address: '338 New Dorp Ln, Staten Island, NY',
                website: 'https://bestores.com/',
                postphoto: "Bestorestatenisland.jpg",
                zipCode: 10306,
                avgRating: 3.7
            },
            {
                dispensaryName: 'CBD Herbal Lab',
                description: 'CBD, or cannabidiol, is a natural derivative of hemp and has been known to have many positive heath benefits without the psychoactive side-effects CBD, in it;s many forms, provides a legal alternatibve to marijuana which allowd cosumers the beneifts of of CBD without getting high.',
                latitude: 40.6261517,
                longitude: -74.0755313,
                phone: 7184478273,
                address: '646 Bay St suite b, Staten Island, NY',
                website: 'https://www.bestcbdsi.com/',
                postphoto: "CBDLAB.jpg",
                zipCode: 10304,
                avgRating: 4.5
            },
            {
                dispensaryName: 'Bronx Medical Marijuana Doctor',
                description: 'We realize that Americans are facing major health crisis. Our mission is to help patients manage their medical conditions in a legal way with medical cannabis . We strongly believe that cannabis therapy works better than pharmaceuticals when it comes to chronic pain, inflammation, anxiety, PTSD, neurological disorders, side effects , and other health issues.',
                latitude: 40.8750475,
                longitude: -73.8850685,
                phone: 7183138211,
                address: '174 E 205th St, The Bronx, NY',
                website: 'https://fastmedicalcardonline.com/newyork/',
                postphoto: "BronxMedicalDoc.jpg",
                zipCode: 10458,
                avgRating: 2.1
            },
            {
                dispensaryName: 'Hemp Supply Plus - CBD',
                description: 'These products are intended to diagnose, treat, cure or prevent any disease or ailment. Hemp Supply Plus assumes no responsibility for the improper use of these products. We recommend consulting with a qualified medical doctor or physician when preparing a treatment plan for any and all diseases or ailments.',
                latitude: 40.6214046,
                longitude: -73.7258859,
                phone: 7183138211,
                address: '127A Spruce St, Cedarhurst, NY',
                website: 'https://www.hempsupplyplus.com/',
                postphoto: "hempsupp.jpg",
                zipCode: 11516,
                avgRating: 4.8
            },
        ]
    }
]

const ratingData = [
    {
        'model': 'rating',
        'documents': [
            {
                user: "60632aeb42e8d0a9a732a82f",
                dispensary: '60633b3910b96e2370668783',
                rating: 5.0,
                review: 'Best experience ever'
            },
            {
                user: "60632aeb42e8d0a9a732a82f",
                dispensary: '60632c5920615babc8f28fec',
                rating: 4.0,
                review: 'Customer service could be better, but their products are top of the line'
            },
            {
                user: "60632b8bb758e0aa6e49ff5d",
                dispensary: '60633b3910b96e2370668785',
                rating: 4.0,
                review: 'A good friend recommended this place'
            },
            {
                user: "60632ca1feabbeac3cbd6a3c",
                dispensary: '60633b3910b96e2370668785',
                rating: 4.0,
                review: 'Wide range of product selection'
            },
            {
                user: "60632ca1feabbeac3cbd6a3c",
                dispensary: '60633b3910b96e2370668784',
                rating: 3.0,
                review: 'It was closed when I went, a little disappointed'
            },
            {
                user: "60632b8bb758e0aa6e49ff5d",
                dispensary: '60633b3910b96e2370668786',
                rating: 5.0,
                review: 'One of the best dispensaries in town'
            },
            
        ]
    }
]