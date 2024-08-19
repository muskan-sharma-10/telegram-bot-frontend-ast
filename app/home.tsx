import React from "react";
import DeleteButton from "@/components/DeleteButton";
import UpdateApiKeyButton from "@/components/ApiUpdateButton";
import CheckBox from "@/components/CheckBox";

interface User {
    username: string;
    chatId: string;
    isBlock: boolean;
}

const HomePage = ({ apiKey, users }: { apiKey: string; users: User[] }) => {
    const totalUsers = users.length;
    const blockedUsers = users.filter((user) => user.isBlock).length;
    const activeUsers = totalUsers - blockedUsers;

    return (
        <div
            style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "20px",
                fontFamily: "'Roboto', sans-serif",
            }}
        >
            <h1 style={{ color: "#1976d2", marginBottom: "20px" }}>
                Weather Admin Dashboard
            </h1>

            {/* Box for Managing API Keys */}
            <div
                style={{
                    background: "#ffffff",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    marginBottom: "20px",
                }}
            >
                <h2 style={{ color: "#424242" }}>Manage API Key</h2>
                <p style={{ color: "#757575" }}>
                    Current API Key:{" "}
                    <span style={{ fontWeight: "bold", color: "#1976d2" }}>{apiKey}</span>
                </p>
                <UpdateApiKeyButton title={"Update API Key"} />
            </div>

            {/* User Statistics */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                }}
            >
                <div
                    style={{
                        background: "#e3f2fd",
                        padding: "20px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        flex: "1",
                        marginRight: "10px",
                    }}
                >
                    <h3 style={{ color: "#1976d2" }}>Total Users</h3>
                    <p style={{ fontSize: "2rem", color: "#1976d2" }}>{totalUsers}</p>
                </div>
                <div
                    style={{
                        background: "#e8f5e9",
                        padding: "20px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        flex: "1",
                        marginRight: "10px",
                    }}
                >
                    <h3 style={{ color: "#388e3c" }}>Active Users</h3>
                    <p style={{ fontSize: "2rem", color: "#388e3c" }}>{activeUsers}</p>
                </div>
                <div
                    style={{
                        background: "#ffebee",
                        padding: "20px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        flex: "1",
                    }}
                >
                    <h3 style={{ color: "#d32f2f" }}>Blocked Users</h3>
                    <p style={{ fontSize: "2rem", color: "#d32f2f" }}>{blockedUsers}</p>
                </div>
            </div>

            {/* Box for Listing Current Users */}
            <div
                style={{
                    background: "#ffffff",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
            >
                <h2 style={{ color: "#424242" }}>Current Users</h2>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr
                            style={{
                                background: "#f5f5f5",
                                borderBottom: "2px solid #e0e0e0",
                            }}
                        >
                            <th
                                style={{ padding: "10px", textAlign: "left", color: "#424242" }}
                            >
                                Username
                            </th>
                            <th
                                style={{ padding: "10px", textAlign: "left", color: "#424242" }}
                            >
                                Chat ID
                            </th>
                            <th
                                style={{ padding: "10px", textAlign: "left", color: "#424242" }}
                            >
                                Action
                            </th>
                            <th
                                style={{ padding: "10px", textAlign: "left", color: "#424242" }}
                            >
                                Blocked
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr
                                key={user.chatId}
                                style={{ borderBottom: "1px solid #e0e0e0" }}
                            >
                                <td style={{ padding: "10px", color: "#424242" }}>
                                    {user.username}
                                </td>
                                <td style={{ padding: "10px", color: "#424242" }}>
                                    {user.chatId}
                                </td>
                                <td style={{ padding: "10px" }}>
                                    <DeleteButton chatId={user.chatId} />
                                </td>
                                <td style={{ padding: "10px" }}>
                                    <CheckBox value={user.isBlock} chatId={user.chatId} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <p style={{ marginTop: "20px", textAlign: "center", color: "#424242" }}>
                You can find the bot at:{" "}
                <a
                    href="https://t.me/muskan10_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: "#1976d2",
                        textDecoration: "none",
                        fontWeight: "bold",
                    }}
                >
                    https://t.me/muskan10_bot
                </a>
            </p>
        </div>
    );
};

export default HomePage;