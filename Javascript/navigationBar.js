// Array to hold navigation page details with names and links
const navPages = [
    {name: "Home" , href: '/Amro-s-Ecommerce-Website/Home/Home.html'},
    {name: "Gallery" , href: '/Amro-s-Ecommerce-Website/Gallery/Gallery.html'},
    {name: "Catalogue", href: '/Amro-s-Ecommerce-Website/Catalogue/Catalogue.html'},    
    {name: "Design", href: '/Amro-s-Ecommerce-Website/Course Work/Web_Design.html'}
];

// Function to load the navbar based on the current page name
export function loadNavbar(CurrentPageName){
    const nav = document.querySelector("header > nav"); // Get the nav element in the header
    const ul = document.createElement("ul"); // Create a new unordered list for nav items

    // Loop through each page in the navPages array
    for(let page of navPages){
        const li = document.createElement("li"); // Create a list item for each page
        li.classList.add("navBarOption"); // Add a class to the list item
        
        // Check if the current page is not the one being looped over
        if (CurrentPageName != page.name){
            const a = document.createElement("a"); // Create an anchor tag for the link
            a.innerText = page.name; // Set the text of the link to the page name
            a.setAttribute("href", page.href); // Set the href attribute to the page's link
            li.appendChild(a); // Append the anchor to the list item            
        } 
        else {
            // If it's the current page, just display the name
            li.innerText = page.name; 
            li.style.color = "pink"; 
            li.style.textDecoration = "underline"; // Underline the current page name for emphasis
        }
        ul.appendChild(li); // Append the list item to the unordered list        
    }
    nav.appendChild(ul); // Finally, append the ul to the nav element

     // Create a logo element
     const logo = document.createElement("img");
     logo.src = "../Images/IMG_9133.PNG"; // Set the path to your logo image
     logo.alt = "Logo"; // Set an alt attribute for accessibility
     logo.classList.add("navLogo"); // Add a class for styling
 
     // Append the logo to the nav
     ul.appendChild(logo);
}
