(function() {
    var metaTag = document.querySelector('meta[name="license-key"]');
    var licenseKey = metaTag ? metaTag.getAttribute("content").trim() : null;
    var domain = window.location.hostname.replace(/^www\./, '');

    console.log("🚀 Debugging Started...");
    console.log("🔍 Checking License Key:", licenseKey);
    console.log("🔍 Checking Domain:", domain);

    if (!licenseKey) {
        alert("❌ License Key Not Found! Redirecting...");
        window.location.href = "https://templatesadda.com";
        return;
    }

    fetch("https://themelicense.learnpropdf.com/verify_license.php?key=" + encodeURIComponent(licenseKey) + "&domain=" + encodeURIComponent(domain))
        .then(response => response.json())
        .then(data => {
            console.log("✅ License API Response:", data);
            
            if (data.status === "success") {
                console.log("✅ License Verified Successfully! Template Unlocked.");
                document.body.style.display = "block";
            } else {
                console.log("❌ License Invalid:", data.message);
                alert("❌ " + data.message);
                window.location.href = "https://templatesadda.com";
            }
        })
        .catch(error => {
            console.log("🚨 Fetch Error:", error);
            alert("❌ License Verification Failed! API Error.");
            window.location.href = "https://templatesadda.com";
        });
})();
