import { ARCJET_KEY } from "../config/env.js";
import aj from "../config/arcjet.js";

const arcjetMiddleware = async (req, res, next) => {
  try {
    const decision = await aj.protect(req, { requested: 1 });
    console.log("Arcjet decision:", decision);

    if (decision.isDenied()) {
      if (decision.reason === "ArcjetBotReason") {
        return res.status(403).json({ message: "Bot detected" });
      }
      if (decision.reason === "RATE_LIMIT") {
        return res.status(429).json({ message: "Rate limit exceeded" });
      }
    }

    next(); // Only if allowed
  } catch (err) {
    console.error("Error from Arcjet:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default arcjetMiddleware;

//