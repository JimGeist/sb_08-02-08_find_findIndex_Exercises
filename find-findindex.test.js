describe("#findUserByUsername", function () {
  let users;
  beforeEach(function () {
    users = [
      { username: "mlewis" },
      { username: "akagen" },
      { username: "msmith" }
    ];
  });
  it("returns the object if the username matches the string passed", function () {
    expect(findUserByUsername(users, "akagen")).toEqual({ username: "akagen" });
  });
  it("returns undefined if a username is not found", function () {
    expect(findUserByUsername(users, 'taco')).toEqual(undefined);
  });
});

describe("#removeUser", function () {
  let users;
  beforeEach(function () {
    users = [
      { username: "mlewis" },
      { username: "akagen" },
      { username: "msmith" }
    ];
  })
  it("removes the first user (mlewis) from the beginning of users array", function () {
    removeUser(users, "mlewis");
    expect(users.length).toEqual(2)

  });
  it("returns the removed user (mlewis) removed from the beginning of users array", function () {
    expect(removeUser(users, "mlewis")).toEqual({ username: "mlewis" });
  });

  it("removes the middle user (akagen) from the middle of users array", function () {
    removeUser(users, "akagen");
    expect(users.length).toEqual(2)

  });
  it("returns the removed user (akagen) removed from the middle of the users array", function () {
    expect(removeUser(users, "akagen")).toEqual({ username: "akagen" });
  });

  it("removes the last user (msmith) from the end of the users array", function () {
    removeUser(users, "msmith");
    expect(users.length).toEqual(2)

  });
  it("returns the removed user (msmith) removed from the end of the users array", function () {
    expect(removeUser(users, "msmith")).toEqual({ username: "msmith" });
  });

  it("returns undefined a user from an array", function () {
    expect(removeUser(users, "taco")).toEqual(undefined);
    expect(users.length).toEqual(3);

  });

});
