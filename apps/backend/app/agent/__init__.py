# Generic async LLM-agent - automatic provider selection

# * If caller supplies `openai_api_key` (arg or ENV), we use OpenAIProvider.
# * Otherwise we defer to an explicitly configured llama_index provider.
# * If neither is available, we raise -> ProviderError.

from .manager import AgentManager, EmbeddingManager

__all__ = ["AgentManager", "EmbeddingManager"]
