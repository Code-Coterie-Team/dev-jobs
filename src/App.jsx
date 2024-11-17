const App = () => {
  return (
    <Routes>
      <Route path="/" element={<home />} />
      <Route path="/books" element={<BookList />} />
    </Routes>
  );
};

export default App;
