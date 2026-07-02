import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    id: 1,
    question: "What is E-Summit '25 and who is eligible to attend?",
    answer:
      "E-Summit '25 is the annual flagship entrepreneurship and design convergence summit. It is open to students, professionals, designers, developers, and aspiring entrepreneurs from all universities and fields.",
  },
  {
    id: 2,
    question: 'How do I register for the workshops and speaker sessions?',
    answer:
      "You can register by clicking the 'Register Now' or event action buttons on our homepage. Simply select the specific events or tracks you wish to participate in and complete the secure registration form.",
  },
  {
    id: 3,
    question: 'Are there any team size limits for the Photoshop Battle?',
    answer:
      "Yes, the Photoshop Battle is an individual competition, but other events under the 'Genesis in Action' track may allow teams of up to 3 members. Please check the specific event guidelines for full details.",
  },
  {
    id: 4,
    question: 'When and where will the E-Summit merchandise be distributed?',
    answer:
      "Official merchandise, including limited-edition t-shirts, tote bags, and mugs, can be collected from the main registration desk on the campus during the summit days.",
  },
  {
    id: 5,
    question: 'Will I receive certificates for participating in the workshops?',
    answer:
      "Yes, all registered participants who attend the workshops and complete the associated projects will receive an official digital Certificate of Participation verified by the E-Summit '25 committee.",
  },
  {
    id: 6,
    question: 'How can I contact the support team for registration queries?',
    answer:
      "For any technical queries or registration assistance, please reach out to our dedicated support team via the Contact Us section at the bottom of the page or email us at support@esummit.in.",
  },
]

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button
        className="faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
        id={`faq-btn-${faq.id}`}
      >
        <span className="faq-question-text">{faq.question}</span>
        <span className="faq-icon" aria-hidden="true">
          {isOpen ? '×' : '+'}
        </span>
      </button>

      <div
        className="faq-answer-wrapper"
        style={{ maxHeight: isOpen ? '300px' : '0' }}
        role="region"
        aria-labelledby={`faq-btn-${faq.id}`}
      >
        <p className="faq-answer">{faq.answer}</p>
      </div>

      <div className="faq-divider" />
    </div>
  )
}

const FAQ = () => {
  // First item open by default (matching the design)
  const [openId, setOpenId] = useState(1)

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="faq-section" id="faqs">
      <h2 className="faq-heading">FAQs?</h2>

      <div className="faq-list">
        {faqs.map((faq) => (
          <FAQItem
            key={faq.id}
            faq={faq}
            isOpen={openId === faq.id}
            onToggle={() => handleToggle(faq.id)}
          />
        ))}
      </div>
    </section>
  )
}

export default FAQ
