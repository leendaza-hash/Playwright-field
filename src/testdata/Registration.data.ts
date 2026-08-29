export function getRegistrationData() {
    const uniqueId = `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    return [
        {
            firstName: 'John',
            lastName: 'Doe',
            email: `testuser-${uniqueId}@gmail.com`,
            dateOfBirth: '2000-01-01',
            country: 'MY',
            postalCode: '50450',
            houseNumber: '123',
            street: 'Jalan Bukit Bintang',
            city: 'Kuala Lumpur',
            state: 'Wilayah Persekutuan',
            phone: `01${Math.floor(10000000 + Math.random() * 90000000)}`,
            password: 'password123'
        }
    ];
}
