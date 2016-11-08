var expect = chai.expect;

describe("should remove duplicate email addresses", function() {

  describe("maintain input order", function() {
    it("maintain input order", function() {
      expect(email_duplicator(['a@a.com', 'b@b.com', 'a@a.com'])).to.deep.equal(['a@a.com', 'b@b.com']);
    });
  });

  describe("handle large input under one second", function() {
    it("handle input with size 113334", function() {
      var start_time = performance.now();
      email_duplicator(list0);
      var end_time = performance.now();
      console.log(end_time - start_time)
      expect(end_time - start_time).to.be.below(1000); // 1000 milliseconds == 1 second
    });
    it("handle input with size 226667", function() {
      var start_time = performance.now();
      email_duplicator(list1);
      var end_time = performance.now();
      console.log(end_time - start_time)
      expect(end_time - start_time).to.be.below(1000); // 1000 milliseconds == 1 second
    });
    it("handle input with size 340000", function() {
      var start_time = performance.now();
      email_duplicator(list2);
      var end_time = performance.now();
      console.log(end_time - start_time)
      expect(end_time - start_time).to.be.below(1000); // 1000 milliseconds == 1 second
    });
    it("handle input with size 453334", function() {
      var start_time = performance.now();
      email_duplicator(list3);
      var end_time = performance.now();
      console.log(end_time - start_time)
      expect(end_time - start_time).to.be.below(1000); // 1000 milliseconds == 1 second
    });
    it("handle input with size 566667", function() {
      var start_time = performance.now();
      email_duplicator(list4);
      var end_time = performance.now();
      console.log(end_time - start_time)
      expect(end_time - start_time).to.be.below(1000); // 1000 milliseconds == 1 second
    });
    it("handle input with size 680000", function() {
      var start_time = performance.now();
      email_duplicator(list5);
      var end_time = performance.now();
      console.log(end_time - start_time)
      expect(end_time - start_time).to.be.below(1000); // 1000 milliseconds == 1 second
    });
    it("handle input with size 793334", function() {
      var start_time = performance.now();
      email_duplicator(list6);
      var end_time = performance.now();
      console.log(end_time - start_time)
      expect(end_time - start_time).to.be.below(1000); // 1000 milliseconds == 1 second
    });
    it("handle input with size 906667", function() {
      var start_time = performance.now();
      email_duplicator(list7);
      var end_time = performance.now();
      console.log(end_time - start_time)
      expect(end_time - start_time).to.be.below(1000); // 1000 milliseconds == 1 second
    });
    it("handle input with size 1020000", function() {
      var start_time = performance.now();
      email_duplicator(list8);
      var end_time = performance.now();
      console.log(end_time - start_time)
      expect(end_time - start_time).to.be.below(1000); // 1000 milliseconds == 1 second
    });
    it("handle input with size 1133334", function() {
      var start_time = performance.now();
      email_duplicator(list9);
      var end_time = performance.now();
      console.log(end_time - start_time)
      expect(end_time - start_time).to.be.below(1000); // 1000 milliseconds == 1 second
    });
  })

});

906667
1020000
1133334
1246667
