import math

class Pagination:
    def __init__(self, items=None, page_size=10):
        if items is None:
            items = []
        self.items = items  
        self.page_size = page_size  
        self.current_idx = 0  
        self.total_pages = math.ceil(len(items) / page_size)  

    def get_visible_items(self):
        start_index = self.current_idx * self.page_size
        end_index = start_index + self.page_size
        return self.items[start_index:end_index]

    def go_to_page(self, page_num):
        if page_num < 1 or page_num > self.total_pages:
            raise ValueError("Page number should start from 1 and not exceed the total number of pages.")
        self.current_idx = page_num - 1  
        return self

    def first_page(self):
        self.current_idx = 0
        return self

    def last_page(self):
        self.current_idx = self.total_pages - 1
        return self

    def next_page(self):
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        return self

    def previous_page(self):
        if self.current_idx > 0:
            self.current_idx -= 1
        return self

    def __str__(self):
        visible_items = self.get_visible_items()
        return "\n".join(map(str, visible_items))

alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.get_visible_items())
# ['a', 'b', 'c', 'd']

p.next_page()
print(p.get_visible_items())
# ['e', 'f', 'g', 'h']

p.last_page()
print(p.get_visible_items())
# ['y', 'z']


p.go_to_page(10)
print(p.current_idx + 1)
""" the total number of pages is 7 (26 letters / 4 items per page = 6.5, rounded up to 7), so 10 is out of range"""
# Output: 7

p.go_to_page(0)
# Raises ValueError