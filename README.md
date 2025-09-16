Features

Debounced Search

Prevents excessive API calls by waiting until the user stops typing.

Smooth and efficient search experience.

Multi-Tab Search

Supports searching across:

👤 People

📂 Files

💬 Chats

📝 Lists

Each tab shows filtered results for its category.

All Results View

Combines and displays results from all categories in one list.

Empty State Handling

Shows <term> not found message when no results are available in the selected tab.

Graceful fallback when a category has no data.

Loading State

Displays skeleton loader while search results are being fetched.

Dynamic Rendering

Uses a mapping approach to dynamically render the correct component (PersonItem, FileItem, ChatsItem, ListItem) based on the active tab.

Avoids repetitive code using dynamic prop passing.

Unique Keys

Ensures unique React keys using a combination of activeTab and id to prevent duplicate key warnings.

Utility Functions

filterData: Handles filtering logic for different datasets.

isPerson: Helper to differentiate between person and file items in the "all" tab.

## Tech Stack


React (UI)

Context API (search state management)

TailwindCSS (styling)

How It Works

User types in the search input → term gets debounced.

debouncedTerm is shared via Context across all components.

Each tab filters its data using filterData.

Results are displayed via the right component dynamically.

Skeleton loader is shown while results are loading.

Empty message is shown if no results match the search.