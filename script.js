document.getElementById('payBtn').addEventListener('click', async () => {
    try {
        const response = await fetch('https://api.xendit.co/v2/invoices', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa('YOUR_API_KEY:')
            },
            body: JSON.stringify({
                external_id: 'demo_123',
                amount: 10000, // Amount in PHP
                payer_email: 'customer@example.com',
                description: 'Test Product',
                payment_methods: ['GCASH']
            })
        });

        const data = await response.json();
        window.location.href = data.invoice_url; // Redirect to GCash payment page
    } catch (error) {
        console.error('Payment error:', error);
        alert('Something went wrong. Please try again.');
    }
});
