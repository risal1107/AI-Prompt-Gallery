"use strict";

module.exports = {
  async listPrompts(_req, res) {
    res.status(200).json({ prompts: [] });
  },
  async getPrompt(_req, res) {
    res.status(200).json({ prompt: null });
  },
  async createPrompt(_req, res) {
    res.status(201).json({ prompt: null });
  },
};
