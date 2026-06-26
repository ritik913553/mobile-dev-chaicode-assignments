import { Note } from "@/types";

export const notes: Note[] = [
  {
    id: "1",
    title: "Project Launch Plan",
    date: "Jun 26",
    content:
      "We are finalizing the launch strategy for the new workspace client version. The initial phase of the redesign is centered on identifying the core friction points in the current navigational flow.\n\nBy prioritizing high-frequency tasks, we can reduce the cognitive load for power users while maintaining an intuitive entry point for newcomers. The objective is a 'headless' interface where the tools disappear during active creation.\n\nKey deliverables for the upcoming sprint:\n1. Finalize the bento-style dashboard grid layout.\n2. Implement the contextual action bar with micro-animations.\n3. Run a user-testing session with 5 beta participants.\n4. Resolve theme transition performance bottlenecks on low-end Android devices.\n5. Optimize SVG rendering inside navigation tabs.\n\nWe are aiming for a tactile response system—every interaction should feel physically responsive, using spring physics rather than linear timing curves.",
    tag: "Work",
  },
  {
    id: "2",
    title: "Weekly Grocery List",
    date: "Jun 25",
    content:
      "Planning a clean-eating week. Head to the local organic market on Saturday morning to beat the crowd:\n\nProduce:\n- 2 bags of fresh baby spinach\n- 1 organic broccoli crown\n- 3 ripe avocados (look for medium softness)\n- Fresh pint of blueberries and organic raspberries\n- 2 lemons for morning detox tea\n- Garlic cloves and red onions for meal prep bases\n\nDairy & Proteins:\n- Almond milk (unsweetened, vanilla)\n- 1 dozen organic free-range eggs\n- Fresh wild-caught salmon fillets\n- Lean turkey breast\n\nPantry:\n- Rolled oats (gluten-free)\n- Sourdough bread loaf (freshly baked from bakery corner)\n- Raw honey\n- Chia seeds",
    tag: "Personal",
  },
  {
    id: "3",
    title: "Full-Body Workout Routine",
    date: "Jun 24",
    content:
      "Push-Pull-Legs hybrid routine targeting general hypertrophy and building conditioning:\n\nWarm-up:\n- Dynamic stretching (arm circles, leg swings) - 5 mins\n- 500m row at moderate intensity\n\nMain Lifts:\n1. Barbell Squats:\n   - Set 1: 8 reps @ 65% 1RM\n   - Set 2: 8 reps @ 70% 1RM\n   - Set 3: 6 reps @ 75% 1RM\n   - Focus heavily on depth, driving from heels, keeping chest elevated.\n\n2. Dumbbell Bench Press:\n   - 3 sets of 10, 8, 8 reps\n   - Ensure controlled eccentric phase (3 seconds down, 1 second explode up).\n\n3. Lat Pulldowns (Wide Grip):\n   - 3 sets of 12 reps\n   - Squeeze shoulder blades together at the bottom. Avoid using momentum.\n\n4. Lateral Raises (Dumbbell):\n   - 4 sets of 15 reps\n   - Keep arms slightly bent, focus on lateral delt engagement.\n\n5. Standing Overhead Press:\n   - 3 sets of 8 reps\n   - Keep core braced to protect lower back.\n\nCool Down:\n- Static hamstring stretch, cobra pose, and chest opener.\n- Drink plenty of water and consume protein shake within 45 mins.",
    tag: "Fitness",
  },
  {
    id: "4",
    title: "TypeScript Deep Dive Notes",
    date: "Jun 23",
    content:
      "Here are my personal learning notes on advanced TypeScript usage in modern React/React Native apps:\n\n1. Generics:\n   Generics allow components and helper functions to accept types as arguments. For example, instead of using 'any' for a response handler, we define <T> so that TS can dynamically infer the exact return shape. This prevents type safety breaks down the line.\n\n2. The Mystery of NodeJS.Timeout:\n   When setting up a setTimeout timer in a browser environment, window.setTimeout returns a simple number. However, inside React Native, Metro/Node packages configure the environment such that setTimeout returns a NodeJS.Timeout object. When typing refs that hold timers, we must explicitly declare them as:\n   `useRef<NodeJS.Timeout | null>(null)`\n   Otherwise, TypeScript will assume the ref is strictly for null and crash when we try to assign the timer object to `.current`.\n\n3. Pick & Omit Utility Types:\n   - Pick<T, Keys> allows us to create a new type by choosing only specific fields from another interface.\n   - Omit<T, Keys> is the inverse, allowing us to drop fields we don't need.",
    tag: "Learning",
  },
  {
    id: "5",
    title: "Marketing Campaign Ideas",
    date: "Jun 22",
    content:
      "Brainstorming for the Q3 brand awareness push. Focus should be on community-driven growth and showcasing the tool's performance.\n\nCore Channels:\n- Twitter/X: Daily interactive questions, sharing short videos of micro-animations, and highlighting real-world client workflow redesigns.\n- LinkedIn: Long-form technical articles highlighting how the engineering team solved major performance bottlenecks. Build developer-advocacy.\n- YouTube Shorts / TikTok: Quick, punchy, high-energy UI walkthroughs showing transition effects (like the circular reveal theme switcher).\n\nKey Concepts:\n1. The 'Before & After' campaign - showing messy code/UI vs modern clean UI.\n2. Interactive quizzes with visual rewards.\n3. Creating open-source starter templates to drive brand discovery.\n\nSchedule:\n- July Week 1: Prepare assets and visual designs.\n- July Week 2: Soft launch the templates.\n- August: Scale content velocity.",
    tag: "Work",
  },
  {
    id: "6",
    title: "Travel Bucket List 2026",
    date: "Jun 20",
    content:
      "Destinations I want to explore this year and next:\n\n1. Kyoto, Japan:\n   - Visit during autumn to catch the red maple leaves.\n   - Stay in a traditional Ryokan and try authentic multi-course kaiseki dining.\n   - Walk the Fushimi Inari gates early in the morning (around 6:00 AM) to avoid the tourist crowd.\n\n2. Swiss Alps, Switzerland:\n   - Take the Glacier Express train from Zermatt to St. Moritz.\n   - Hike around the Lauterbrunnen valley, observing the massive waterfalls.\n   - Try traditional cheese fondue in a mountain cabin.\n\n3. Reykjanes Peninsula, Iceland:\n   - Drive the Golden Circle route.\n   - Bathe in the Blue Lagoon.\n   - Capture the Northern Lights (best during winter months from October to March).",
    tag: "Personal",
  },
  {
    id: "7",
    title: "Cardio Progression Log",
    date: "Jun 18",
    content:
      "Focusing on building aerobic base capacity (Zone 2 running):\n\nTarget Heart Rate Zone: 135 - 148 bpm.\n\nWeekly Schedule:\n- Tuesday: 40-minute easy jog. Keep speed low, focus on breathing entirely through the nose.\n- Thursday: Interval sprint session. 5-minute warm-up, then 8 rounds of 30-second sprints followed by 90-second recovery walks. 5-minute cooldown.\n- Sunday: Long distance run. 8K at a conversational pace. Do not let HR cross 150 bpm.\n\nImportant Cues:\n- Keep stride length short to minimize impact force on knees.\n- Land on the mid-foot rather than striking hard with the heel.\n- Hydrate properly beforehand.",
    tag: "Fitness",
  },
  {
    id: "8",
    title: "Next.js App Router Setup",
    date: "Jun 15",
    content:
      "Key lessons learned while migrating a legacy React app to Next.js App Router:\n\n- React Server Components (RSC) by default: All components inside the app directory are Server Components by default. This improves performance as the JS bundle sent to the client is significantly reduced.\n- Adding 'use client': For interactivity (e.g., state, effects, event listeners), we must add the 'use client' directive at the top of the file. Keep client components as leaves of the component tree to maximize server-side rendering benefits.\n- Route Groups: Using folders like `(auth)` or `(dashboard)` allows grouping related routes without affecting the URL structure. Very handy for layout segregation.\n- Dynamic Routes: Folder names like `[id]` create dynamic route segments. The value can be fetched from the page component props (`params.id`).",
    tag: "Learning",
  },
];
