# 📝 Task Frontend

A frontend project built with **React + TypeScript + Vite**, using **Redux Toolkit** for state management, **React Hook Form + Zod** for form validation, and **Shadcn UI** for UI components.

---

## 🚀 Tech Stack

- **React 18 + TypeScript**
- **Vite** (bundler)
- **Redux Toolkit** (state management)
- **React Hook Form + Zod** (form handling & validation)
- **TanStack Query** (data fetching)
- **Axios** (API requests)
- **Shadcn UI + TailwindCSS** (UI & styling)

## 📂 Project Structure

    ```bash
    src/
    │── app/ # Global app setup
    │ ├── api/ # Axios & Query client configs
    │ │ ├── axiosConfig.ts
    │ │ ├── queryClient.ts
    │ │
    │ ├── hooks/ # Custom reusable hooks
    │ │ ├── useGetQuery.ts
    │ │ ├── usePostMutation.ts
    │ │
    │ ├── providers/ # Context/Providers
    │ │ ├── theme-provider.tsx
    │ │
    │ ├── routes/ # Routing setup
    │ │ ├── routes.tsx
    │ │
    │ ├── store/ # Redux store (root store)
    │ │ ├── index.ts
    │ │
    │ └── index.ts # App-level exports (optional barrel file)
    │
    │── components/ # Shared/global UI components
    │ ├── mode-toggle.tsx
    │
    │── features/ # Feature-based modules
    │ ├── dashboard/ # Dashboard feature
    │ │ ├── components/
    │ │ │ ├── ErrorElement.tsx
    │ │ │ ├── MainSection.tsx
    │ │ │ ├── NotFound.tsx
    │ │ │ ├── Sidebar.tsx
    │ │ │ ├── WorkSummary.tsx
    │ │ ├── pages/
    │ │ │ ├── LayoutDashboardPage.tsx
    │ │ │ ├── MainPage.tsx
    │ │ └── index.ts # Barrel exports for dashboard
    │ │
    │ ├── entriesdashboards/ # Posts/Entries feature
    │ │ ├── components/
    │ │ │ ├── loadingSkeleton.tsx
    │ │ │ ├── AddPostDialog.tsx
    │ │ │ ├── DisplayPostsForm.tsx
    │ │ │ ├── DisplayPostsTable.tsx
    │ │ │ ├── EditPostDialog.tsx
    │ │ │ ├── PostsPagination.tsx
    │ │ │ ├── SearchBar.tsx
    │ │ ├── pages/
    │ │ │ ├── DisplayPostsPage.tsx
    │ │ ├── services/
    │ │ │ ├── GetAllPosts.ts
    │ │ │ ├── PostNewPost.ts
    │ │ ├── store/
    │ │ │ ├── postsSlice.ts
    │ │ ├── types/
    │ │ │ ├── posts.type.ts
    │ │ ├── validation/
    │ │ │ ├── addPosts.ts
    │ │ └── index.ts # Barrel exports for entriesdashboards
    │
    │── lib/ # Global styles & utilities
    │ ├── utils/ # Helper functions
    │ ├── App.css
    │ ├── App.tsx
    │ ├── index.css
    │ ├── main.tsx
    │ └── vite-env.d.ts
    ```

---

## ⚡ Features

- 📊 **Dashboard layout** with sidebar & summary
- 📝 **Posts management**:
  - Add new posts
  - Edit existing posts
  - Paginated & searchable posts table
- 🎨 **Dark/Light mode** toggle
- 🧩 **Reusable UI components** (Dialog, Pagination, Search, etc.)
- ⚡ **Error boundaries** & `NotFound` page

---

## 🛠️ Installation & Setup

1. Clone the repo:

   ```bash
   git clone https://github.com/moelsayed089/Task-Front-end.git
   cd task-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

---

## 👨‍💻 Author

Mohamed Elsayed – Frontend Developer
