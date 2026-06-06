# Collision Resolution in Hash Tables

When analyzing time complexity for Hash Maps, the theoretical lookup time is $O(1)$. However, the underlying implementation must account for hash collisions. 

### Core Concepts
When two distinct keys produce the same hash output, we need a strategy to store both. The two standard approaches are:
1.  **Chaining:** Storing a linked list at each bucket index.
2.  **Open Addressing:** Probing for the next available empty slot in the array.

```java
// A simple chaining node implementation
class HashNode<K, V> {
    K key;
    V value;
    final int hashCode;
    HashNode<K, V> next;
    // ... constructor omitted
}