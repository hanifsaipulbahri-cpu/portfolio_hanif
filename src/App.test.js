import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from './components/Contact';

test('copies the email address when the copy button is clicked', async () => {
  const writeText = jest.fn().mockResolvedValue();
  Object.defineProperty(navigator, 'clipboard', {
    value: { writeText },
    configurable: true,
  });

  render(<Contact />);

  const user = userEvent.setup();
  await user.click(screen.getByRole('button', { name: /copy email/i }));

  expect(writeText).toHaveBeenCalledWith('hanif.saipulbahri@gmail.com');
  expect(await screen.findByText(/copied!/i)).toBeInTheDocument();
});
