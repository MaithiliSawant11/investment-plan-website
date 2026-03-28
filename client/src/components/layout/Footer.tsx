import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold green-gradient-text mb-4">ALTERNA SAVINGS</h3>
            <p className="text-sm text-muted-foreground">
              Premium wealth management and investment solutions for the modern era.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <ul className="space-y-2 text-sm text-muted-foreground">
  <li>
    <Link href="/">
      <a className="hover:text-emerald-600 transition">Home</a>
    </Link>
  </li>

  <li>
    <Link href="/dashboard">
      <a className="hover:text-emerald-600 transition">Portfolio</a>
    </Link>
  </li>

  <li>
    <Link href="/contact">
      <a className="hover:text-emerald-600 transition">Contact</a>
    </Link>
  </li>
</ul>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Regulatory Information</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Placeholder Email</li>
              <li>Placeholder Phone</li>
              <li>Placeholder Address</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-muted-foreground">
          <p>This is a demonstration prototype. All information and data shown are placeholders.</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Aurum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}