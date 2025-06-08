export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-0 py-4 text-sm text-gray-600 flex flex-col sm:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} NeuroAdapt.</p>
      </div>
    </footer>
  );
}
