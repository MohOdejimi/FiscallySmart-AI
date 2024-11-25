## FiscallySmart AI

This project is a full-featured fintech application designed to simulate stock trading while providing users with insightful financial analysis and suggestions powered by AI. The platform allows users to:

### Key Features

- **Make Virtual Stock Trades**:  Users can explore and execute virtual stock trades to test various market strategies without financial risk.
- **Receive AI-Driven Insights**: By integrating Gemini, the platform provides users with real-time insights and personalized financial suggestions based on their trading activity.
- **Interactive Charting**: With an interactive Plotly.js-powered interface, users can visualize their trading data dynamically. Each data point can be clicked to reveal additional information, adding a layer of engagement and depth to the financial insights provided.
- **Financial Goal Setting**:  Users can create plans, make virtual credits to their balance, and receive updates on their progress toward achieving their goals.
- **News Feature**: Users can search for the latest news and analysis by stockbrokers and financial analysts on their favorite stocks listed on the NYSE.
- **Learning Modules**: Users can interact with curated modules on investment topics such as stocks, bonds, understanding risk and return, and more.

Link to Project: https://fiscallysmart-ai.onrender.com/

![stock dashboard](<Screenshot (95).png>)

### Technologies Used 

The project leverages the MERN stack for its core functionality:
- **MongoDB**: For managing persistent data like user profiles, quiz progress, and financial goal data.
- **Express.js**: Acts as the backend framework to handle API routing and server-side logic.
- **React (EJS in some parts)**: Used for rendering the user-facing interface and providing interactive features.
- **Node.js**: Powers the backend, ensuring fast and efficient request handling.

Other librarires and tools I utilzed include:
- **Passport.js** for user authentication and session management.
- **Plotly.js** for interactive data visualization.
- **bcrypt** for password hashing.
- **express-session** for session management.
- **TailwindCSS** for clean and responsive UI design.

### System Architecture 

The architectureis designed around the Model-View-Controller (MVC) pattern, which helps in organizing the codebase for better maintainability and scalability. While the project currently follows a monolithic structure, it is modular enough to allow for future refactoring into a more distributed system if necessary.

While the application follows the MVC pattern, I structured it as a monolithic application, meaning that the entire codebase is deployed as a single unit. This was a deliberate choice to simplify deployment and management during development. The monolithic structure makes it easier for me to coordinate features and ensures that all components are tightly integrated. However, I have kept the code modular, so it’s easier to break it into microservices in the future if needed

### Development Process

The development process started with outlining the core features and creating a database schema for MongoDB. I implemented the backend APIs using Express.js, ensuring that each endpoint was optimized for performance and scalability.
The frontend was then built in EJS templates for simplicity, later incorporating React for features requiring dynamic updates.
Finally, I deployed the platform using Render, configuring the build to ensure smooth deployment. The .gitignore file was properly set up to exclude sensitive files like .env and unnecessary directories like node_modules.

### Challenges and Solutions

- **Real-Time Stock Data Integration and Maintaining API Requests Limits** I used batch requests to fetch stock data for multiple stocks in a single API call. This not only reduced the number of API calls made but also helped in managing the daily request limits imposed by the API provider. By grouping requests together, I was able to fetch the data efficiently without overloading the system.
- **Interactive Visualizations** Handling dynamic charts required integrating Plotly.js carefully into the backend and frontend to support interactivity without compromising performance.
- **User Data Security** I used Passport.js for secure user authentication and protected sensitive user data with proper environment variables for API keys and database credentials.

### Future Improvements 

-**Mobile Optimization**: Adding a responsive mobile-first design to enhance accessibility.
-**Advanced AI Features**: Enhancing the AI model to provide deeper financial insights and portfolio analysis.

This project represents a significant milestone in my journey as a developer, combining multiple technologies and concepts to create a robust, user-focused financial education platform. It reflects not only my technical skills but also my ability to solve complex problems and deliver value to end-users.