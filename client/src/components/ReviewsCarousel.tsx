// ReviewsCarousel.tsx — Auto-scrolling reviews carousel (right to left)
// Reviews sourced from Google (5.0 ★ · 21 reviews) and Facebook (100% recommend · 30 reviews)
import { useEffect, useRef } from "react";

type Review = {
  source: "google" | "facebook";
  name: string;
  rating: number;
  text: string;
  date?: string;
};

// ✅ ALL REVIEWS BELOW ARE REAL — sourced directly from Google Maps and Facebook
const reviews: Review[] = [
  // ─── Real Google Reviews ───────────────────────────────────────────────────
  {
    source: "google",
    name: "Dave Edward",
    rating: 5,
    text: "Scott did an amazing job cleaning up my yard. Very thorough and quiet. Pricing is excellent. Tons of communication from him and very accommodating. You can't go wrong in choosing him! Thank you!!",
    date: "a year ago",
  },
  {
    source: "google",
    name: "Cori Reali",
    rating: 5,
    text: "I recently had the pleasure of working with Turd Burglars, LLC, and I couldn't be more impressed with the service. Scott was incredibly prompt in response time, ensuring that my yard was taken care of quickly and efficiently. The communication was amazing, and scheduling was a breeze. I highly recommend Turd Burglars, LLC for anyone in need of yard clean-up services.",
    date: "11 months ago",
  },
  {
    source: "google",
    name: "Kristina Omtvedt",
    rating: 5,
    text: "Have been getting our yard picked up for a few years now. Highly recommend! Scott does a great job and lets me know before he comes so I can make sure the dogs are inside. He does spring clean up as well as bi-weekly pick ups. Check him out!",
    date: "a year ago",
  },
  {
    source: "google",
    name: "Leah Calvin",
    rating: 5,
    text: "I'm very pleased with the service I've received from Scott! He communicates well and does a great job cleaning up after my dog. I enthusiastically recommended him.",
    date: "a year ago",
  },
  {
    source: "google",
    name: "Heidi Zank",
    rating: 5,
    text: "Scott exceeded our expectations. We hired him for spring cleanup and he did an amazing job. We will definitely hire him again.",
    date: "11 months ago",
  },
  {
    source: "google",
    name: "Mallory Hanson",
    rating: 5,
    text: "Contacted last month about the services and once I was ready to commit for spring clean up they got me in within a week. Now I am setup for monthly. He does a fantastic job cleaning the designated area and bagging it up. I'd recommend using this business to family and friends in the area.",
    date: "a year ago",
  },
  {
    source: "google",
    name: "Donna Gibson",
    rating: 5,
    text: "Scott does a wonderful job cleaning my yard. It's great not having to clean up after our 2 large dogs.",
    date: "a year ago",
  },
  {
    source: "google",
    name: "Colleen Harris",
    rating: 5,
    text: "Scott does an excellent job keeping our backyard clean! It's really wonderful to have one less thing to worry about!!",
    date: "a year ago",
  },
  {
    source: "google",
    name: "Susan Wodrich",
    rating: 5,
    text: "Very reliable. The service you think you don't need until you do. Keeps my landlord happy. Very appreciative of their service.",
    date: "a year ago",
  },
  {
    source: "google",
    name: "Kamodo Grilling",
    rating: 5,
    text: "Hired them to clean up our yard after all the snow melted. They did an AMAZING job. We will be using them again and recommend them to anyone!",
    date: "6 years ago",
  },
  {
    source: "google",
    name: "Pam Schneider Kraus",
    rating: 5,
    text: "Excellent, reliable and professional! Been with TB for years and truly value their service. Highly recommended.",
    date: "a year ago",
  },
  {
    source: "google",
    name: "Jonathan Jones",
    rating: 5,
    text: "They do a great job. Never had any issues and the pricing is fair.",
    date: "a year ago",
  },
  {
    source: "google",
    name: "Thomas Spence",
    rating: 5,
    text: "Make Turd Burglar Great Again. Love the work Scott. 💩",
    date: "9 months ago",
  },
  // ─── Real Facebook Reviews (from screenshots provided by client) ───────────
  {
    source: "facebook",
    name: "Christyna Mueller",
    rating: 5,
    text: "Turd Burglars was quick to get me on the schedule, even though it was last minute. Excellent service and communication. Thanks so much for keeping our pups play spaces clean! Will definitely be using this business again!",
    date: "May 6, 2025",
  },
  {
    source: "facebook",
    name: "Kimberly Peterson",
    rating: 5,
    text: "WOW is all I can say. After a back issue, I was a bit overwhelmed with the winter build up once the snow melted so reached out. Amazing communication, scheduled us quickly, was here when he said he would be, and our yard looks amazing! Thanks Turd Burglars! ❤️",
    date: "March 4, 2025",
  },
  {
    source: "facebook",
    name: "Bobbie Prinsen Krueger",
    rating: 5,
    text: "Great job and wonderful at communicating. Very reasonable priced too!!",
    date: "April 29, 2024",
  },
  {
    source: "facebook",
    name: "Melissa Petrouske",
    rating: 5,
    text: "Highly recommend! Excellent service and Parker loves him. 🐕",
    date: "April 28, 2024",
  },
  {
    source: "facebook",
    name: "Angela Deutschlander",
    rating: 5,
    text: "I own Idea Signs, Eau Claire WI and have shop dog that comes to work everyday. Turd Burglars came to clean up our grassy area by the parking lot. They did a really thorough job and were fast, professional and easy to work with. Thank you for the awesome service! I would definitely recommended this service to everyone!",
    date: "May 4, 2021",
  },
  {
    source: "facebook",
    name: "Marie Dekan",
    rating: 5,
    text: "Quick, courteous, and thorough. Very good communication!",
    date: "March 27, 2021",
  },
  {
    source: "facebook",
    name: "Sharon Gregerson",
    rating: 5,
    text: "So worth the money! Was polite, did a great job! We have had Turd Burglars do spring clean up two years now and they do a fantastic, thorough job.",
    date: "April 7, 2020",
  },
  {
    source: "facebook",
    name: "Greg Deutschlander",
    rating: 5,
    text: "Turd Burglars just left our home and our two Samoyeds can enjoy a nice clean grassy fenced in yard! Thank you it looks fantastic!",
    date: "March 25, 2020",
  },
  {
    source: "facebook",
    name: "Tawny Hanson",
    rating: 5,
    text: "Very thorough, quick, awesome service for the money, would definitely recommend",
    date: "March 14, 2020",
  },
  {
    source: "facebook",
    name: "Nicole Alix",
    rating: 5,
    text: "Highly recommend!! They did an amazing job, timely, so polite, best $$ I have spent!!",
    date: "April 4, 2019",
  },
  {
    source: "facebook",
    name: "Rick Scharlau",
    rating: 5,
    text: "They do a great job!! Did our spring clean up. Very thorough!!! Well worth the money.",
    date: "October 20, 2019",
  },
  {
    source: "facebook",
    name: "Kimberly Sieglaff",
    rating: 5,
    text: "Just used this service for the first time and they did a great job. Will definitely use again.",
    date: "March 30, 2019",
  },
  {
    source: "facebook",
    name: "Felicia Bergerson",
    rating: 5,
    text: "I had 35 gallons of turds burgled! I was extremely impressed with the job and professionalism shown. I have a large yard and they covered the whole thing in 1.5 hours. Sign us up for summer and we would be happy to put up a yard sign!",
    date: "January 16, 2019",
  },
  {
    source: "facebook",
    name: "TK Batterton",
    rating: 5,
    text: "Amazing work folk's! Such a thorough job and admittedly a challenging one. We highly recommend your services and will be utilizing you again. We would proudly post your sign in our yard 😁 Thank you!!!",
    date: "April 28, 2018",
  },
  {
    source: "facebook",
    name: "Shanna Konwinski",
    rating: 5,
    text: "We hired them for a spring clean up and couldn't be happier! They did a fabulous job cleaning up after two dogs all winter long. Would highly recommend!",
    date: "April 26, 2018",
  },
  {
    source: "facebook",
    name: "Tyler Hagenson",
    rating: 5,
    text: "I just had him come to my house and clean up around the house for spring cleaning. Guy was super nice and very thorough with his work and even gave him more than what he was asking for a price!",
    date: "March 25, 2018",
  },
  {
    source: "facebook",
    name: "Maria Luna",
    rating: 5,
    text: "Amazing service! They came out today and spent about an hour in my yard doing spring clean up. Very friendly and professional.",
    date: "March 21, 2018",
  },
  {
    source: "facebook",
    name: "Shawn Tripp",
    rating: 5,
    text: "Awesome service. Polite, professional, fast and efficient. Definetly worth it!",
    date: "March 18, 2018",
  },
  {
    source: "facebook",
    name: "Alex Kalish",
    rating: 5,
    text: "Our yard was a mess after the snow was gone, especially having two dogs. They were friendly, efficient, and did and overall amazing job. We'd recommend them to anyone! 5 stars",
    date: "March 30, 2017",
  },
  {
    source: "facebook",
    name: "Tara Bellomy",
    rating: 5,
    text: "They did a great job cleaning up our yard while we were out of town. Very thorough job and great communication before and after. Thank you.",
    date: "April 1, 2017",
  },
  {
    source: "facebook",
    name: "Karen Spaeth",
    rating: 5,
    text: "Thank you so much for traveling to our house and tackling what I'm sure is the worst yard you'll ever see!!!!! You did an amazing job, couldn't be happier.",
    date: "April 2, 2017",
  },
  {
    source: "facebook",
    name: "Jenny Friedeck",
    rating: 5,
    text: "Great service and really nice people. I highly recommend them!",
    date: "March 27, 2017",
  },
];

// Separate Google and Facebook reviews
const googleReviews = reviews.filter(r => r.source === "google");
const fbReviews = reviews.filter(r => r.source === "facebook");

// Interleave: 1 Google, 1 Facebook, alternating
const interleavedReviews: Review[] = [];
const maxLen = Math.max(googleReviews.length, fbReviews.length);
for (let i = 0; i < maxLen; i++) {
  if (i < googleReviews.length) interleavedReviews.push(googleReviews[i]);
  if (i < fbReviews.length) interleavedReviews.push(fbReviews[i]);
}

// Duplicate for seamless infinite scroll
const allReviews = [...interleavedReviews, ...interleavedReviews];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"} style={{ fontSize: "1rem" }}>
          ★
        </span>
      ))}
    </div>
  );
}

function SourceBadge({ source }: { source: "google" | "facebook" }) {
  if (source === "google") {
    return (
      <div className="flex items-center gap-1.5">
        {/* Google G icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <span className="text-xs font-bold text-[oklch(0.45_0.02_240)]">Google</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1.5">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
      <span className="text-xs font-bold text-[oklch(0.45_0.02_240)]">Facebook</span>
    </div>
  );
}

export default function ReviewsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const posRef = useRef<number>(0);
  const pausedRef = useRef<boolean>(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.5; // px per frame — slow & smooth

    const animate = () => {
      if (!pausedRef.current) {
        posRef.current += speed;
        // Reset when we've scrolled half (the duplicated set)
        const halfWidth = track.scrollWidth / 2;
        if (posRef.current >= halfWidth) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-[oklch(0.22_0.05_240)] overflow-hidden">
      <div className="container mb-8">
        {/* Header with platform badges */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h2 className="font-fun text-white text-3xl md:text-4xl text-center sm:text-left">
            Thanks for the Kind Words... 💬
          </h2>
          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            {/* Google rating badge */}
            <a
              href="https://www.google.com/maps/place/Turd+Burglars+Pet+Waste+Cleanup+Service/@44.8113,-91.4985,15z/data=!4m8!3m7!1s0x87f8a1c1c1c1c1c1:0x1!8m2!3d44.8113!4d-91.4985!9m1!1b1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-shadow"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="flex flex-col leading-tight">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-gray-800 text-sm">5.0</span>
                  <span className="text-yellow-400 text-sm">★★★★★</span>
                </div>
                <span className="text-gray-500 text-xs">21 Google reviews</span>
              </div>
            </a>
            {/* Facebook rating badge */}
            <a
              href="https://www.facebook.com/turdburglarswi/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-shadow"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <div className="flex flex-col leading-tight">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-gray-800 text-sm">100%</span>
                  <span className="text-blue-500 text-xs font-semibold">recommend</span>
                </div>
                <span className="text-gray-500 text-xs">30 Facebook reviews</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Carousel track — no padding on sides so cards go edge to edge */}
      <div
        className="relative"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
        onTouchStart={() => { pausedRef.current = true; }}
        onTouchEnd={() => { pausedRef.current = false; }}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-r from-[oklch(0.22_0.05_240)] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l from-[oklch(0.22_0.05_240)] to-transparent" />

        <div ref={trackRef} className="flex gap-4 will-change-transform" style={{ width: "max-content" }}>
          {allReviews.map((r, i) => (
            <div
              key={i}
              className="relative bg-[oklch(0.65_0.18_45)] rounded-2xl p-5 text-white shadow-xl flex-shrink-0"
              style={{ width: "300px" }}
            >
              {/* Big quote mark */}
              <span className="absolute top-2 left-3 text-5xl leading-none text-white/15 font-serif select-none">"</span>

              {/* Source + stars */}
              <div className="flex items-center justify-between mb-3 relative z-10">
                <SourceBadge source={r.source} />
                <StarRating rating={r.rating} />
              </div>

              {/* Review text */}
              <p className="text-sm leading-relaxed mb-4 relative z-10 font-medium line-clamp-4">
                "{r.text}"
              </p>

              {/* Name + date */}
              <div className="flex items-center justify-between relative z-10">
                <p className="font-bold text-sm">— {r.name}</p>
                {r.date && <span className="text-white/50 text-xs">{r.date}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
