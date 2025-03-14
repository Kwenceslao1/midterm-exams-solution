function delayedGreeting(name) {
    setTimeout(function() {
        console.log(`Hello, ${name}!`);
    }, 2000); // 2 seconds
}

delayedGreeting("Alice");