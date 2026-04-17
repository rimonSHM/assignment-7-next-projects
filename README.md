KeenKeeper Navbar Component
A modern, responsive, and dynamic navigation header built using Next.js (App Router), Tailwind CSS, and Lucide React icons.

✨ Features
Active Path Detection: Uses the usePathname hook to automatically highlight the link corresponding to the current URL.

Dynamic Rendering: Navigation items are managed via a centralized array, making it easy to add or remove links.

Polished UI: Features a clean "Evergreen" aesthetic with a professional color palette (#1E3A34).

Smooth Interactions: Includes transition effects for hover states and active button toggles.

Optimized Navigation: Utilizes Next.js Link for fast, client-side routing without page refreshes.

🛠️ Tech Stack




HeroBanner Component
The HeroBanner serves as the primary landing section for the KeenKeeper application. It features a bold headline, a call-to-action (CTA) for adding new connections, and a quick-glance statistics dashboard.

✨ Features
Impactful Typography: Uses large, tracking-tight headings (text-5xl to text-6xl) for a modern, high-end feel.

Call to Action (CTA): A prominent "Add a Friend" button with a hover effect and distinct styling.

Stats Dashboard: Includes a responsive grid of StatCard components to provide users with immediate data visualization.

Responsive Design: Mobile-first approach with grid adjustments (grid-cols-2 to lg:grid-cols-4) and scaling text sizes.

Subtle Styling: Utilizes a soft background (#F8FAFC) and card borders (#E2E8F0) to create a clean, "breathable" interface.



This is a sophisticated Friend Detail & CRM Page. It’s designed to help users track their relationships with granular detail, featuring a dynamic timeline and quick action buttons.

Here is the README.md documentation for your Page component:

👤 Friend Profile & Timeline Page
This component serves as the detailed view for an individual "Friend" in the KeenKeeper app. It manages personal data, relationship health metrics, and a real-time activity log.

✨ Features
Dynamic Data Fetching: Uses useParams to extract the friend's ID and filter the local JSON database (friendsData).

Interactive Timeline: Features a React useState hook to manage a list of interactions. Users can log new events (Calls, Texts, Video chats) instantly.

Quick Check-In System: One-click buttons to log interactions, which automatically update the timeline with icons and timestamps.

Relationship Metrics: Displays "Days Since Contact" and "Goal" metrics to help users maintain their social habits.

Notifications: Integrated with react-hot-toast to provide immediate visual feedback upon logging an action.

Management Tools: UI options to "Snooze," "Archive," or "Delete" a connection.



Footer Component
The Footer is the closing section of the KeenKeeper application. It reinforces the brand identity, provides social media connectivity, and includes essential legal links.

✨ Features
Brand Reinforcement: Displays the main logo and mission statement ("Tagline") to keep the value proposition top-of-mind.

Social Connectivity: Integrated circular social icons using react-icons with smooth hover transitions.

Responsive Layout: Uses a flexible column layout that shifts to a row-based bottom bar on medium screens (md:flex-row).

Modern Aesthetic: Features a high-contrast dark green background with subtle gray text and border-top dividers for a clean, professional finish.

Legal & Compliance: Includes placeholders for Privacy Policy, Terms of Service, and Cookies.