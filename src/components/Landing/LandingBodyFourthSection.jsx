import React, { useState, useEffect } from 'react';

export default function LandingBodyFourthSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechInnovate",
      quote: "This product completely transformed our workflow. It made collaboration seamless and intuitive, allowing our team to move faster and track progress in real time. We've seen a significant boost in efficiency, and I can't imagine going back to how we worked before.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      company: "DataStream Solutions",
      quote: "Incredible user experience! The design is elegant yet functional, and the platform is incredibly intuitive. We've been able to tailor it to our needs, and its seamless integration with other tools has made a huge difference in our workflow.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "GlobalConnect",
      quote: "The most user-friendly tool I've used in years. It keeps our team organized and on track, and the real-time collaboration features are invaluable. Everything we need is in one place, making us more agile and aligned.",
      rating: 4
    },
    {
      name: "David Kim",
      role: "CTO",
      company: "CloudSync",
      quote: "Exceptional performance and reliability. It's become an essential part of our tech stack. The tool handles high volumes of data seamlessly, helping us deliver on deadlines without any hiccups.",
      rating: 5
    },
    {
      name: "Alexis Thompson",
      role: "Design Lead",
      company: "CreativePulse",
      quote: "A beautiful interface that doesn’t compromise on functionality. It’s rare to find a tool that blends design and practicality so well. It’s made managing design projects and collaborating with the team much easier.",
      rating: 4
    },
    {
      name: "Marcus Webb",
      role: "Sales Director",
      company: "EnterpriseEdge",
      quote: "Transformed our sales process with its intuitive design and powerful analytics. We can now track leads and performance with ease, saving time and boosting conversion rates.",
      rating: 5
    },
    {
      name: "Rachel Patel",
      role: "Operations Manager",
      company: "SmartSolutions",
      quote: "Simplified complex workflows and dramatically boosted productivity. The automation features have saved us hours of manual work, and the streamlined system has allowed the team to focus on what really matters.",
      rating: 5
    }
  ];

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="landing-body-fourth">
      <h3 className="landing-body-fourth-heading">User Experiences</h3>
      <div className="landing-body-fourth-content display-flex-content-center">
        <div className="testimonial-carousel display-flex-content-center">
          {testimonials
            .slice(startIndex, startIndex + 5)
            .concat(testimonials.slice(0, Math.max(0, startIndex + 5 - testimonials.length)))
            .map((testimonial, index) => (
              <div 
                key={index} 
                className={`testimonial-card ${index === 2 ? 'active' : ''}`}
              >
                <div className="testimonial-content">
                  <p className="quote">"{testimonial.quote}"</p>
                  <div className="testimonial-details">
                    <div className="rating">{renderStars(testimonial.rating)}</div>
                    <div className="author">
                      <h3>{testimonial.name}</h3>
                      <p>{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
