const request = require('supertest');
const app = require('../app'); // Adjust the path to your Express app
const User = require('../models/user.model'); // Adjust the path to your User model

jest.mock('../models/user.model');

describe("GET /api/user/:id", () => {
  let mockUser;

  beforeEach(() => {
    mockUser = { id: '669a31a0f4d40dd2ef8b9473', name: 'John Doe' };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return a user", async () => {
    User.findById.mockResolvedValue(mockUser);

    const res = await request(app).get("/api/user/669a31a0f4d40dd2ef8b9473");

    expect(User.findById).toHaveBeenCalledWith('669a31a0f4d40dd2ef8b9473');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("User found successfully");
    expect(res.body.user).toEqual(mockUser);
  });

  it("should return 500 if user is not found", async () => {
    User.findById.mockRejectedValue(new Error("User not found"));

    const res = await request(app).get("/api/user/669a31a0f4d40dd2ef8b9473");

    expect(User.findById).toHaveBeenCalledWith('669a31a0f4d40dd2ef8b9473');
    expect(res.statusCode).toBe(500);
    expect(res.body.message).toBe("User not found: User not found");
  });
});

describe("POST /api/user/register", () => {
    let mockUser;
  
    beforeEach(() => {
      mockUser = { id: '669a31a0f4d40dd2ef8b9473', name: 'John Doe', email: 'john@example.com' };
    });
  
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    it("should create a user and return user details", async () => {
      User.create.mockResolvedValue(mockUser);
  
      const res = await request(app)
        .post("/api/user/register")
        .send({ name: 'John Doe', email: 'john@example.com' });
  
      expect(User.create).toHaveBeenCalledWith({ name: 'John Doe', email: 'john@example.com' });
      expect(res.statusCode).toBe(200);
      expect(res.body.message).toBe("User registered successfully");
      expect(res.body.user).toEqual(mockUser);
    });
  
    it("should return 500 if user creation fails", async () => {
      User.create.mockRejectedValue(new Error("User creation failed"));
  
      const res = await request(app)
        .post("/api/user/register")
        .send({ name: 'John Doe', email: 'john@example.com' });
  
      expect(User.create).toHaveBeenCalledWith({ name: 'John Doe', email: 'john@example.com' });
      expect(res.statusCode).toBe(500);
      expect(res.body.message).toBe("Registration unsuccessful: User creation failed");
    });
  });

  describe("POST /api/user/login", () => {
    let mockUser;
  
    beforeEach(() => {
      mockUser = { _id: '669a31a0f4d40dd2ef8b9473', email: 'john@example.com', password: 'password123' };
    });
  
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    it("should return userId and success message when login is successful", async () => {
      User.findOne.mockResolvedValue(mockUser);
  
      const res = await request(app)
        .post("/api/user/login")
        .send({ email: 'john@example.com', password: 'password123' });
  
      expect(User.findOne).toHaveBeenCalledWith({ email: 'john@example.com' });
      expect(res.statusCode).toBe(200);
      expect(res.body.message).toBe("Login successful");
      expect(res.body.userId).toBe(mockUser._id.toString());
    });
  
    it("should return 401 if email or password is incorrect", async () => {
      User.findOne.mockResolvedValue(null); // Simulate user not found
  
      const res = await request(app)
        .post("/api/user/login")
        .send({ email: 'john@example.com', password: 'wrongpassword' });
  
      expect(User.findOne).toHaveBeenCalledWith({ email: 'john@example.com' });
      expect(res.statusCode).toBe(401);
      expect(res.body.message).toBe("Invalid email or password");
    });
  
    it("should return 401 if user exists but password is incorrect", async () => {
      User.findOne.mockResolvedValue(mockUser);
  
      const res = await request(app)
        .post("/api/user/login")
        .send({ email: 'john@example.com', password: 'wrongpassword' });
  
      expect(User.findOne).toHaveBeenCalledWith({ email: 'john@example.com' });
      expect(res.statusCode).toBe(401);
      expect(res.body.message).toBe("Invalid email or password");
    });
  
    it("should return 500 if there is a server error", async () => {
      User.findOne.mockRejectedValue(new Error("Server error"));
  
      const res = await request(app)
        .post("/api/user/login")
        .send({ email: 'john@example.com', password: 'password123' });
  
      expect(User.findOne).toHaveBeenCalledWith({ email: 'john@example.com' });
      expect(res.statusCode).toBe(500);
      expect(res.body.message).toBe("Server error: Server error");
    });
  });