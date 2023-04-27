// leetCode_1  两数之和


/* 
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，
并返回它们的数组下标。你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/



/**
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * target = 9   
 * nums = [2,4,5,6,7]  
 * return [1,2] 
 */

/* 
    2023/4/28 00:02
    思路
    1. 创建一个map，将数组遍历后的值放入map的key中。通过has查找出等于和的值
*/

var twoSum = function (nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        //2. 获得每次下标值对应的另一个值
        const value = target - nums[i]
        //3. value是否存在于map中，存在返回map对应的value下标值
        if (map.has(value)) {
            return [map.get(value), i]
        }
        // 1.添加进map,key是值，value是下标
        map.set(nums[i], i)
    }
    return []
};
console.log(twoSum([2, 4, 5, 6, 7], 9))//返回值 [1,2]