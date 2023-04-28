/* 
 力扣 912 排序算法
 2023-04-28 19:18

排序算法思路
1.冒泡排序
2.选择排序

*/


/* 
给你一个整数数组 nums，请你将该数组升序排列。
示例 1：
输入：nums = [5,2,3,1]
输出：[1,2,3,5]

示例 2：
输入：nums = [5,1,1,2,0,0]
输出：[0,0,1,1,2,5]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/sort-an-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const arr = [6, 4, 2, 3, 1, 9]

/* 
    思路一:冒泡排序
    每次排序获取数组中最大值，将其排到末尾
*/
var sortArray = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i; j++) {
            if (nums[j] > nums[j + 1]) {
                // 当前大于后一位则交换
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
            }
        }
    }
    return nums || []
};
// console.log(sortArray([5, 1, 1, 2, 0, 0]))


/* 
    2.选择排序
    每次排序时找到比当前小的数交换
    
    ...
    1 2 4 5 8 7 3  =>  1 2 3 5 8 7 4
    1 2 3 5 8 7 4  =>  1 2 3 4 7 8 5
    1 2 3 4 7 8 5  =>  1 2 3 4 5 8 7
    1 2 3 4 5 8 7  =>  1 2 3 4 5 7 8
 
 */
var optionArray = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let currentMinIndex = i;
        for (let j = i; j < nums.length; j++) {
            if (nums[j] < nums[currentMinIndex]) {
                // 当前下标小于开始下标则交换
                [nums[j], nums[currentMinIndex]] = [nums[currentMinIndex], nums[j]]
            }
        }
    }
    return nums || []
};
// console.log(optionArray([5, 1, 1, 2, 0, 0]))


/* 
    3.插入排序
    每次排序让所有比当前数大的值下标增加一位，在把当前数插入比当前数小的后面

*/

// 1 3 4 2 5
// 1 3 4 4 5
// 1 3 3 4 5
// 1 2 3 4 5

var insertArray = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        // 获取当前数
        let curValue = nums[i];
        // 获取前一个数
        let minIndex = i - 1
        // 遍历比当前索引小的所有数，如果有值比当前值大，该值索引+1，将当前数插入进去。
        while (minIndex >= 0 && curValue < nums[minIndex]) {
            nums[minIndex + 1] = nums[minIndex]
            minIndex--
        }

        // 遍历完成后 minIndex + 1 (while多减了一次) 就是存放 curValue 的索引
        nums[minIndex + 1] = curValue
    }
    return nums || []
};


console.log(insertArray(arr))
console.log("123");
