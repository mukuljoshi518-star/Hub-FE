import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  CardActions
} from '@mui/material';
import {
  CheckCircleOutline,
  People,
  SupportAgent,
  Info
} from '@mui/icons-material';

const pricingPlans = [
  {
    title: 'Basic',
    price: '$9.99',
    features: [
      { text: '1 User', icon: <People fontSize="small" /> },
      { text: 'Basic Support', icon: <SupportAgent fontSize="small" /> },
      { text: 'Core Features', icon: <CheckCircleOutline fontSize="small" /> },
      { text: 'Limited Reports', icon: <Info fontSize="small" /> },
    ],
    buttonText: 'Start Trial',
  },
  {
    title: 'Premium',
    price: '$29.99',
    features: [
      { text: '5 Users', icon: <People fontSize="small" /> },
      { text: 'Priority Support', icon: <SupportAgent fontSize="small" /> },
      { text: 'All Features', icon: <CheckCircleOutline fontSize="small" /> },
      { text: 'Unlimited Reports', icon: <CheckCircleOutline fontSize="small" /> },
      { text: 'Analytics Access', icon: <Info fontSize="small" /> },
    ],
    buttonText: 'Upgrade Now',
  },
  {
    title: 'Enterprise',
    price: '$99.99',
    features: [
      { text: 'Unlimited Users', icon: <People fontSize="small" /> },
      { text: '24/7 Dedicated Support', icon: <SupportAgent fontSize="small" /> },
      { text: 'Custom Integrations', icon: <CheckCircleOutline fontSize="small" /> },
      { text: 'Dedicated Manager', icon: <Info fontSize="small" /> },
    ],
    buttonText: 'Contact Us',
  },
];

const PricingSection = () => {
  return (
    <Box
      sx={{
        py: 10,
        px: 3,
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
        color: '#fff',
        minHeight: '100vh',
      }}
    >
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          mb: 6,
          color: '#f3f4f6',
          textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
        }}
      >
        Transparent, Simple Pricing
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {pricingPlans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                borderRadius: '20px',
                px: 2,
                backdropFilter: 'blur(20px)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                },
              }}
            >
              <CardContent sx={{ py: 5 }}>
                <Typography
                  variant="h5"
                  align="center"
                  sx={{ fontWeight: 700, color: '#fff', mb: 2 }}
                >
                  {plan.title}
                </Typography>
                <Typography
                  variant="h4"
                  align="center"
                  sx={{ color: '#10b981', mb: 3 }}
                >
                  {plan.price}
                  <Typography variant="caption" sx={{ color: '#aaa' }}>/mo</Typography>
                </Typography>

                <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                  {plan.features.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                      <span style={{ marginRight: '10px', color: '#10b981' }}>
                        {feature.icon}
                      </span>
                      <Typography variant="body2" color="white">
                        {feature.text}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', pb: 4 }}>
                <Button
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(to right, #06b6d4, #3b82f6)',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    borderRadius: '50px',
                    fontWeight: 600,
                    transition: 'all 0.3s',
                    '&:hover': {
                      background: 'linear-gradient(to right, #0ea5e9, #2563eb)',
                    },
                  }}
                >
                  {plan.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PricingSection;
