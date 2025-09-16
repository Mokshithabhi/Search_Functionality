import { File, Users, MessageCircle, List } from "lucide-react";

export const settingsItems = [
    { key: "files", label: "Files", icon: File },
    { key: "people", label: "People", icon: Users },
    { key: "chats", label: "Chats", icon: MessageCircle },
    { key: "lists", label: "Lists", icon: List },
];


export const filterData = (items, searchTerm) => {
    if (!items) return [];
    if (!searchTerm) return items;
    return (items || []).filter((item) =>
        (item.name || item.title || "")
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );
};

export const isPerson = (item) => "status" in item && "avatar" in item;

export const singularMap = {
    people: "person",
    files: "file",
    chats: "chat",
    lists: "list",
};

