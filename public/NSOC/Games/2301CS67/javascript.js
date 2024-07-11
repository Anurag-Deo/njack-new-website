async function getRatedUsers() {
    const url = "https://codeforces.com/api/user.ratedList?activeOnly=true&includeRetired=false";

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log("Response data:", data);

        if (data.status === 'OK') {
            return data.result;
        } else {
            throw new Error("Failed to fetch users");
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

function filterByCollege(users, collegeName) {
    return users
        .filter(user => user.organization && user.organization.toLowerCase() === collegeName.toLowerCase())
        .map(user => user.handle);
}

async function main() {
    const collegeName = "IIT Patna";

    try {
        const users = await getRatedUsers();
        console.log("Users:", users); 

        const handles = filterByCollege(users, collegeName);
        console.log(`Handles from ${collegeName}:`, handles); 
    } catch (error) {
        console.error("Error:", error);
    }
}

document.addEventListener('DOMContentLoaded', main);
