import SectionHeader from '../ui/SectionHeader';
import TestimonialCard from '../ui/TestimonialCard';
import { testimonials } from '../../data/portfolioData';

export default function Testimonials() {
  const hasTestimonials = testimonials && testimonials.length > 0;

  if (!hasTestimonials) return null;

  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Testimonials"
          title="What Others Say"
          subtitle="Feedback from colleagues and supervisors I've worked with"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
