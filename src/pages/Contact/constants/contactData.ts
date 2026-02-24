import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const directions = [
    {
        title: 'By Road',
        description: 'Accessible via NH66. Approximately 120 km from Mangalore and 150 km from Goa with direct road connectivity.',
        icon: MapPin
    },
    {
        title: 'By Train',
        description: 'Bhatkal Railway Station (3 km) connects to major cities like Mumbai and Bangalore. Local transport is readily available.',
        icon: MapPin
    },
    {
        title: 'By Air',
        description: 'Nearest airports are Mangalore (120 km) and Goa (150 km) with convenient taxi and bus services to Bhatkal.',
        icon: MapPin
    }
];

export const contactInfo = [
    {
        icon: Phone,
        title: 'Phone',
        details: [
            'Main Office: +91 98765 43210',
            'Admissions: +91 98765 43211',
        ]
    },
    {
        icon: Mail,
        title: 'Email',
        details: [
            'anjuman@anjuman.edu.in',
            'careers@anjuman.edu.in',
        ]
    },
    {
        icon: Clock,
        title: 'Office Hours',
        details: [
            'Saturday - Thursday: 8:30 AM - 5:00 PM',
            'Thursday: 8:30 AM - 2:30 PM',
            'Friday: Closed'
        ]
    },
    {
        icon: MapPin,
        title: 'Address',
        details: [
            'Anjuman Hami-e-Muslimeen, Bhatkal',
            'Adminstrative Block, AnjumanAbad Bhatkal, Karnataka - 581320',
        ]
    }
];
