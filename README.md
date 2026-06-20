Architectural Goals
Keep screens focused on presentation and user interaction.
Move reusable UI into components.
Keep business rules away from views.
Organize backend logic into controllers, services, models and requests.
Avoid large files with too many responsibilities.
Make the project easier to test and maintain over time.
📱 App Screens

The mobile app is organized by screens and responsibilities.

HomeScreen

Responsible for the main application feed.

This screen represents the initial experience of the app, where tweets/posts are listed and the user can interact with the timeline.

NewTweet

Responsible for creating a new tweet/post.

This component handles the user flow for writing and publishing content.

NotificationScreen

Responsible for displaying user notifications.

This screen will show events such as likes, comments, retweets and other interactions.

ProfileScreen

Responsible for rendering the user profile.

This includes user information, handle, profile content, user tweets and profile-related interactions.

SearchScreen

Responsible for searching tweets/posts and potentially users.

This screen will be used to explore content inside the application.

TweetScreen

Responsible for rendering a single tweet/post in detail.

This screen displays:

user name;
user handle;
tweet content;
retweet count;
quote tweet count;
like count;
comment action;
retweet action;
like action;
share action.urrent / Planned Features
 Home feed
 Create new tweet/post
 View single tweet details
 Like tweet
 Retweet
 Quote tweet
 Comment on tweet
 Search tweets
 User profile screen
 Notifications screen
 Laravel API integration
 Authentication
 API validation
 Database persistence
 Clean service layer
 Reusable UI components

 🔥 Recruiter Highlights

This project was created to demonstrate practical knowledge in software development, not only visual implementation.

Some of the key technical points practiced in this project include:

building mobile interfaces with React Native and Expo;
organizing a mobile project by responsibility;
designing reusable components;
connecting a mobile app to a backend API;
planning a Laravel backend with service classes and REST endpoints;
applying clean code principles;
practicing object-oriented programming;
thinking about scalability from the beginning;
documenting technical decisions clearly.

🧩 Clean Code Principles Applied
Single Responsibility Principle

Each screen, component and service should have one clear reason to change.

Example:

HomeScreen handles the feed screen.
TweetCard renders tweet preview UI.
TweetService communicates with tweet-related endpoints.
TweetController handles HTTP requests.
TweetService handles business logic on the backend.
Open/Closed Principle

The project should be easy to extend without rewriting existing behavior.

Example:

New tweet interaction types such as bookmark, share or quote can be added without changing the entire tweet rendering logic.

Dependency Separation

API communication, UI rendering and business rules should not be mixed in the same file.📦 Getting Started
Prerequisites

Make sure you have installed:

Node.js
npm or yarn
Expo CLI
PHP
Composer
Laravel
MySQL or PostgreSQL

🗺️ Roadmap
Phase 1 — Mobile UI
 Create main navigation
 Build home feed layout
 Build tweet card component
 Build tweet detail screen
 Build profile screen
 Build search screen
 Build notification screen
Phase 2 — API Foundation
 Create Laravel project
 Configure database
 Create migrations
 Create models
 Create controllers
 Create API resources
 Create validation requests
Phase 3 — Integration
 Connect React Native app to Laravel API
 Fetch tweets from backend
 Create tweets through API
 Like and retweet using API
 Load user profile from backend
 Load notifications from backend
Phase 4 — Improvements
 Add authentication
 Improve error handling
 Add loading states
 Add empty states
 Add tests
 Improve UI animations
 Refactor services and components
📚 Learning Goals

By building this project, I am improving my understanding of:

React Native architecture;
Expo development workflow;
reusable components;
Laravel API development;
RESTful communication;
object-oriented programming;
SOLID principles;
design patterns;
clean code;
scalable folder structure;
full-stack mobile development.
👨‍💻 Author

Developed by Felipe Batista.

This project is part of my personal journey to become a stronger full-stack developer by building real-world applications with clean architecture, responsibility separation and professional documentation.

⭐ Final Note

This repository represents more than a clone application.

It is a practical study of how to build a mobile product with professional thinking: from interface structure to backend communication, from simple components to scalable architecture.

The focus is not only to make it work.

The focus is to make it clean, understandable and ready to evolve.